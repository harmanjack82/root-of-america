import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface EnquiryRecord {
  id: string;
  timestamp: string;
  formType: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  details?: Record<string, any>;
  recipients: string[];
  deliveryStatus: string;
}

const DATA_FILE = path.join(process.cwd(), "enquiries.json");

function loadEnquiries(): EnquiryRecord[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (err) {
    console.error("Error loading enquiries.json:", err);
  }
  return [];
}

function saveEnquiries(data: EnquiryRecord[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving enquiries.json:", err);
  }
}

const enquiriesStore: EnquiryRecord[] = loadEnquiries();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", service: "Roots of America B2B Backend" });
  });

  // Get all submitted form enquiries
  app.get("/api/enquiries", (req, res) => {
    res.json({
      total: enquiriesStore.length,
      recipients: ["info@rootofamerica.com", "info@rootsofamerica.com"],
      enquiries: enquiriesStore
    });
  });

  // Export enquiries as CSV
  app.get("/api/enquiries/export", (req, res) => {
    const headers = ["ID", "Timestamp", "Form Type", "Name", "Email", "Phone", "Company", "Subject", "Message", "Recipients", "Status"];
    const rows = enquiriesStore.map(e => [
      `"${e.id}"`,
      `"${e.timestamp}"`,
      `"${e.formType}"`,
      `"${(e.name || '').replace(/"/g, '""')}"`,
      `"${(e.email || '').replace(/"/g, '""')}"`,
      `"${(e.phone || '').replace(/"/g, '""')}"`,
      `"${(e.company || '').replace(/"/g, '""')}"`,
      `"${(e.subject || '').replace(/"/g, '""')}"`,
      `"${(e.message || '').replace(/\n/g, ' ').replace(/"/g, '""')}"`,
      `"${e.recipients.join('; ')}"`,
      `"${e.deliveryStatus}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="roots_of_america_inquiries.csv"');
    res.send(csvContent);
  });

  // Submit Form / Enquiry API
  app.post("/api/enquiry", async (req, res) => {
    try {
      const { name, email, phone, company, subject, formType, message, details } = req.body;

      const record: EnquiryRecord = {
        id: `ENQ-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        timestamp: new Date().toISOString(),
        formType: formType || 'General Enquiry',
        name: name || 'N/A',
        email: email || 'N/A',
        phone: phone || 'N/A',
        company: company || 'N/A',
        subject: subject || 'New Website Submission',
        message: message || '',
        details: details || {},
        recipients: ["info@rootofamerica.com", "info@rootsofamerica.com"],
        deliveryStatus: "Dispatched to Backend & Email Endpoints"
      };

      enquiriesStore.unshift(record);
      saveEnquiries(enquiriesStore);

      // Forward to FormSubmit email endpoints asynchronously
      const primaryTarget = "info@rootofamerica.com";
      const secondaryTarget = "info@rootsofamerica.com";

      const emailPayload = {
        _subject: subject || `New Form Submission [${record.formType}]: ${name || company}`,
        _replyto: email || undefined,
        formType: record.formType,
        name: record.name,
        email: record.email,
        phone: record.phone,
        company: record.company,
        message: record.message,
        details: JSON.stringify(record.details || {}),
        submittedAt: record.timestamp
      };

      // Attempt background POSTs to FormSubmit.co for direct inbox delivery
      Promise.allSettled([
        fetch(`https://formsubmit.co/ajax/${primaryTarget}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(emailPayload)
        }),
        fetch(`https://formsubmit.co/ajax/${secondaryTarget}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(emailPayload)
        })
      ]).then((results) => {
        console.log(`[Form Dispatch] Form #${record.id} sent to targets:`, results.map(r => r.status));
      }).catch((err) => {
        console.error(`[Form Dispatch Error]`, err);
      });

      return res.status(200).json({
        success: true,
        message: "Your enquiry has been received and automatically dispatched to info@rootofamerica.com and info@rootsofamerica.com.",
        enquiryId: record.id,
        recipients: record.recipients
      });

    } catch (error: any) {
      console.error("Error processing enquiry:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Failed to process form enquiry"
      });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
