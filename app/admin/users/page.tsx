"use client";

import AdminHeader from "@/components/AdminHeader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserPopUp from "@/components/UserPopUp";

const page = () => {
  return (
    <>
      <AdminHeader></AdminHeader>
      <div className="w-full max-w-4xl mx-auto pt-4 flex justify-between">
        <h1 className="text-3xl">User Table</h1>
        <UserPopUp></UserPopUp>
      </div>
      <div className="flex justify-center items-center mt-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User ID</TableHead>
                <TableHead className="w-[250px]">Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="w-[100px]">1</TableCell>
                <TableCell className="w-[250px]">test</TableCell>
                <TableCell>test@test.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default page;
