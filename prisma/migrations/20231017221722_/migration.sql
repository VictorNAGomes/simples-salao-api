/*
  Warnings:

  - A unique constraint covering the columns `[idUser]` on the table `Professional` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Professional_idUser_key" ON "Professional"("idUser");
