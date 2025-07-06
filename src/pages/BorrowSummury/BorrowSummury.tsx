"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type BorrowEntry = {
  id: string;
  bookTitle: string;
  borrower: string;
  date: string;
};

const dummyBorrowedData: BorrowEntry[] = [
  {
    id: "1",
    bookTitle: "Clean Code",
    borrower: "Rakib Hasan",
    date: "2025-07-01",
  },
  {
    id: "2",
    bookTitle: "1984",
    borrower: "Amina Sultana",
    date: "2025-07-02",
  },
];

export default function BorrowSummary() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">📈 Borrow Summary</h1>

      {/* Summary Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Borrowed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{dummyBorrowedData.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Borrow Table */}
      {dummyBorrowedData.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Book Title</TableHead>
                <TableHead>Borrower</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyBorrowedData.map((entry, index) => (
                <TableRow key={entry.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{entry.bookTitle}</TableCell>
                  <TableCell>{entry.borrower}</TableCell>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>
                    <Badge variant="outline">Borrowed</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No books have been borrowed yet.
        </p>
      )}
    </div>
  );
}
