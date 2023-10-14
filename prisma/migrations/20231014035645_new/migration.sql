/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `Company_preferences` table. All the data in the column will be lost.
  - You are about to drop the column `company_id` on the `Company_service` table. All the data in the column will be lost.
  - You are about to drop the column `service_id` on the `Company_service` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id_company` to the `Company_preferences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_company` to the `Company_service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_service` to the `Company_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Company_preferences" DROP CONSTRAINT "Company_preferences_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Company_service" DROP CONSTRAINT "Company_service_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Company_service" DROP CONSTRAINT "Company_service_service_id_fkey";

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Company_id_seq";

-- AlterTable
ALTER TABLE "Company_preferences" DROP COLUMN "company_id",
ADD COLUMN     "id_company" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Company_service" DROP COLUMN "company_id",
DROP COLUMN "service_id",
ADD COLUMN     "id_company" TEXT NOT NULL,
ADD COLUMN     "id_service" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Service_id_seq";

-- CreateTable
CREATE TABLE "Professional" (
    "id" TEXT NOT NULL,
    "id_company" TEXT NOT NULL,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company_preferences" ADD CONSTRAINT "Company_preferences_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company_service" ADD CONSTRAINT "Company_service_id_company_fkey" FOREIGN KEY ("id_company") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company_service" ADD CONSTRAINT "Company_service_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
