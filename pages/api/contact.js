// /pages/api/contact.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, constituency, village, contact,rate } = req.body;

      const newContact = await prisma.contact.create({
        data: {
          firstName,
          lastName,
          constituency,
          village,
          contact,
          rate,
        },
      });

      res.status(200).json({ message: "Contact saved successfully!", contact: newContact });
    } catch (error) {
      console.error("Error saving contact:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
