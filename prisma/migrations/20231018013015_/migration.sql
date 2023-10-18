/*
  Warnings:

  - You are about to drop the column `criationDate` on the `Company` table. All the data in the column will be lost.
  - Added the required column `creationDate` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "criationDate",
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL;
