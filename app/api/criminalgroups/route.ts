import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import Papa from "papaparse";

export async function GET() {
  // Define the path to your CSV file
  const csvFilePath = path.join(
    process.cwd(),
    "constants",
    "preprocessed_metadata_criminalgroups.csv"
  );

  try {
    // Read the CSV file
    const fileContent = await fs.readFile(csvFilePath, "utf8");

    // Parse the CSV data
    const parsedData = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    // Return the parsed data as JSON
    return NextResponse.json(parsedData.data);
  } catch (error) {
    // Handle any errors that occur during file read or parse
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
