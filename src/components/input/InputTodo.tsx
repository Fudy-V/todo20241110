"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black text-white">
          <span className="font-bold">新規作成</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>入力画面</DialogTitle>
          <DialogDescription>登録したいTODOを入力してください</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              TODO
            </Label>
            <Input id="name" placeholder="What Your Todo?" className="col-span-3"></Input>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Register</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
