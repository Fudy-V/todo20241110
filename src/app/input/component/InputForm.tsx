import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>What Your TODO</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="todo">TODO</Label>
              <Input id="todo" placeholder="WRITE YOUR TODO" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="importance">優先度</Label>
              <Select>
                <SelectTrigger id="importance">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="worst">1</SelectItem>
                  <SelectItem value="worse">2</SelectItem>
                  <SelectItem value="better">3</SelectItem>
                  <SelectItem value="best">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Link href={"./"}>Cancel</Link>
        </Button>
        <Button>登録</Button>
      </CardFooter>
    </Card>
  );
}
