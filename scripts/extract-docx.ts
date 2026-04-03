const mammoth = require("mammoth");
const fs = require("fs");
const path = require("path");

async function extract() {
  const docs = [
    "Gen AI.docx",
    "blog 3 and 4.docx",
    "blog5.docx",
    "Agentic AI.docx",
    "Data 2.docx",
    "Data Page.docx",
  ];

  for (const doc of docs) {
    const filePath = path.join(__dirname, "..", doc);
    if (!fs.existsSync(filePath)) {
      console.log(`❌ Skipping missing file: ${doc}`);
      continue;
    }

    console.log(`🚀 Extracting: ${doc}...`);
    try {
      const result = await mammoth.extractRawText({ path: filePath });
      const text = result.value;
      const outputPath = path.join(__dirname, "..", doc.replace(".docx", "_extracted.txt"));
      fs.writeFileSync(outputPath, text);
      console.log(`✅ Saved to: ${outputPath} (${text.length} chars)`);
    } catch (err) {
      console.error(`❌ Failed to extract ${doc}:`, err);
    }
  }
}

extract();
