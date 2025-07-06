import { BorrowBookModal } from "@/components/modal/BorrowBookModal";
import { EditBookModal } from "@/components/modal/EditBookModal";
import Swal from "sweetalert2";
import {
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "@/redux/api/baseApi";

import type { IBooks } from "@/types/types";
import { useState } from "react";

const AllBooks = () => {
  const [selectedBook, setSelectedBook] = useState<IBooks | null>(null);
  const [modalType, setModalType] = useState<"view" | "edit" | "borrow" | null>(
    null
  );
  // !  fetch all book
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  // !  delete a book
  const [deleteBook] = useDeleteBookMutation();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const books = data?.data ?? [];
  const openModal = (book: IBooks, type: "view" | "edit" | "borrow") => {
    setSelectedBook(book);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setModalType(null);
  };

  //   delete a book
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be sure delet this book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBook(id);
        if (res.data) {
          Swal.fire({
            title: "Deleted!",
            text: "Book has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">📚 All Books</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 uppercase tracking-wide text-xs">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Author</th>
              <th className="px-4 py-2 text-left">Genre</th>
              <th className="px-4 py-2 text-left">ISBN</th>
              <th className="px-4 py-2 text-center">Copies</th>
              <th className="px-4 py-2 text-center">Availability</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {!isLoading &&
              books.map((book: IBooks) => (
                <tr key={book._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{book.title}</td>
                  <td className="px-4 py-2">{book.author}</td>
                  <td className="px-4 py-2">{book.genre}</td>
                  <td className="px-4 py-2">{book.isbn}</td>
                  <td className="px-4 py-2 text-center">{book.copies}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        book.available
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {book.available ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => openModal(book, "view")}
                      className="text-blue-600 hover:underline text-xs"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openModal(book, "edit")}
                      className="text-green-600 hover:underline text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => openModal(book, "borrow")}
                      className="text-yellow-600 hover:underline text-xs"
                    >
                      Borrow
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="text-red-600 hover:underline text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      {modalType === "view" && selectedBook && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-2">
              📖 {selectedBook.title}
            </h2>
            <p>
              <strong>Author:</strong> {selectedBook.author}
            </p>
            <p>
              <strong>Genre:</strong> {selectedBook.genre}
            </p>
            <p>
              <strong>ISBN:</strong> {selectedBook.isbn}
            </p>
            <p>
              <strong>Copies:</strong> {selectedBook.copies}
            </p>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {modalType === "edit" && selectedBook && (
        <EditBookModal open={true} onClose={closeModal} book={selectedBook} />
      )}

      {/* Borrow Modal */}
      {modalType === "borrow" && selectedBook && (
        <BorrowBookModal
          open={true}
          onClose={closeModal}
          book={selectedBook._id}
          bookTitle={selectedBook.title}
        />
      )}
    </div>
  );
};

export default AllBooks;
