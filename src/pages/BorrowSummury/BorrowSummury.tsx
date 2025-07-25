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
import { useGetBorrowSummuryQuery } from "@/redux/api/baseApi";

type Book = {
  title: string;
  date: string;
};
interface BorrowEntry {
  id: string;
  book: Book;
}

export default function BorrowSummary() {
  const { data, isLoading } = useGetBorrowSummuryQuery(undefined);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  const books = data?.data ?? [];

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
            <p className="text-3xl font-semibold">{books.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* Borrow Table */}
      {books.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Book Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((entry: BorrowEntry, idx: number) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{entry.book.title}</TableCell>

                  <TableCell>{entry.book.date || "no date avilable"}</TableCell>
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
