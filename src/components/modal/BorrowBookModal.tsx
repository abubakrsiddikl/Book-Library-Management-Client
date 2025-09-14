import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DialogClose } from "@radix-ui/react-dialog";
import { useCreateBorrowBookMutation } from "@/redux/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Schema
const borrowBookSchema = z.object({
  quantity: z
    .number({ invalid_type_error: "Quantity must be a number" })
    .min(1, "You must borrow at least 1 copy"),
  dueDate: z.string().min(1, "Due date is required"),
});

type BorrowFormValues = z.infer<typeof borrowBookSchema>;

type BorrowBookModalProps = {
  open: boolean;
  onClose: () => void;
  book: string;
  bookTitle: string;
};

export function BorrowBookModal({
  open,
  onClose,
  book,
  bookTitle,
}: BorrowBookModalProps) {
  const form = useForm<BorrowFormValues>({
    resolver: zodResolver(borrowBookSchema),
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const navigate = useNavigate();
  const [createBorrowedBook] = useCreateBorrowBookMutation();

  const onSubmit = async (data: BorrowFormValues) => {
    const payload = {
      book,
      ...data,
    };
    const res = await createBorrowedBook(payload);
    if (res.data) {
      toast.success(`${bookTitle} This book has been borrowed . `);
      navigate("/borrow-summary");
    }
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>📦 Borrow Book</DialogTitle>
          <DialogDescription>
            Confirm how many copies you want to borrow of{" "}
            <strong>{bookTitle}</strong>.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            {/* Quantity */}
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder="1"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Due Date */}
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Borrow</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
