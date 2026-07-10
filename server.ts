import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // API Route for Chat
  app.post("/api/chat", async (req, res) => {
    try {
      let apiKey = process.env.GEMINI_API_KEY;
      
      // Fallback to the provided API key if the environment variable is empty, undefined, or a placeholder
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "" || apiKey === "undefined") {
        apiKey = "AIzaSyDHvTwvocUUEtRqknaLdqo26zKfSkxk1_s";
      }
      
      if (!apiKey || apiKey.trim() === "") {
        return res.status(503).json({ error: "API key is missing or invalid" });
      }

      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages array" });
      }

      // Initialize Gemini SDK with the secure apiKey and telemetry headers
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const systemInstruction = `You are the official AI Assistant of Digital Trikaal.
Digital Trikaal is a premium web development and AI automation agency founded by Ankit Kumar (a YouTuber, website developer, and marketer with over 20 AI certifications).
Our services include:
1. Premium Website Development (using modern React & Tailwind CSS)
2. AI Agent & Custom Bot Development
3. AI Ads Generation & Meta/Google Ads Funnel Optimization
4. AI Content Creation Pipelines
5. Click-Maximizing Thumbnail Design
6. AI Workflow Automation (using Zapier, Make, APIs)
7. Vertical Video Editing & E-Book Generation

Keep your responses highly professional, helpful, polite, and scannable (using bullet points and brief text). Focus on helping visitors understand how Digital Trikaal can grow their business.
When appropriate, encourage them to navigate to the "Contact Us" page or click "Book a Free Consultation" to discuss their project.`;

      // Format messages for the modern @google/genai SDK
      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      let text = "";
      try {
        // Try the primary model: gemini-3.5-flash
        console.log("Attempting primary model: gemini-3.5-flash...");
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });
        text = response.text || "";
      } catch (primaryError: any) {
        console.warn("Primary model (gemini-3.5-flash) failed, attempting fallback to gemini-3.1-flash-lite...", primaryError.message || primaryError);
        
        // Fallback model: gemini-3.1-flash-lite (high capacity, extremely stable)
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite",
          contents: contents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
          },
        });
        text = response.text || "";
      }

      return res.json({ response: text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      // If the error message indicates an API key problem or authentication failed
      return res.status(503).json({ error: "AI Assistant is temporarily unavailable" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
