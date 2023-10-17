/*
  Warnings:

  - The primary key for the `Appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `solicitation_Id` on the `Appointment` table. All the data in the column will be lost.
  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Client` table. All the data in the column will be lost.
  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Name` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `criation_date` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Company` table. All the data in the column will be lost.
  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admission_date` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Employee` table. All the data in the column will be lost.
  - You are about to drop the column `position_id` on the `Employee` table. All the data in the column will be lost.
  - The primary key for the `Position` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Position` table. All the data in the column will be lost.
  - The primary key for the `Preferences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Preferences` table. All the data in the column will be lost.
  - The primary key for the `Professional` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `id_company` on the `Professional` table. All the data in the column will be lost.
  - You are about to drop the column `id_user` on the `Professional` table. All the data in the column will be lost.
  - The primary key for the `Service` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Service` table. All the data in the column will be lost.
  - The primary key for the `Solicitation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `client_id` on the `Solicitation` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Solicitation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Company_preferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company_service` table. If the table is not empty, all the data it contains will be lost.
  - The required column `idAppointment` was added to the `Appointment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idSolicitation` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - The required column `idClient` was added to the `Client` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `criationDate` to the `Company` table without a default value. This is not possible if the table is not empty.
  - The required column `idCompany` was added to the `Company` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admissionDate` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - The required column `idEmployee` was added to the `Employee` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idPosition` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - The required column `idPosition` was added to the `Position` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `idPreferences` was added to the `Preferences` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idCompany` to the `Professional` table without a default value. This is not possible if the table is not empty.
  - The required column `idProfessional` was added to the `Professional` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idUser` to the `Professional` table without a default value. This is not possible if the table is not empty.
  - The required column `idService` was added to the `Service` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idClient` to the `Solicitation` table without a default value. This is not possible if the table is not empty.
  - The required column `idSolicitation` was added to the `Solicitation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `idUser` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_solicitation_Id_fkey";

-- DropForeignKey
ALTER TABLE "Company_preferences" DROP CONSTRAINT "Company_preferences_id_company_fkey";

-- DropForeignKey
ALTER TABLE "Company_preferences" DROP CONSTRAINT "Company_preferences_preferences_id_fkey";

-- DropForeignKey
ALTER TABLE "Company_service" DROP CONSTRAINT "Company_service_id_company_fkey";

-- DropForeignKey
ALTER TABLE "Company_service" DROP CONSTRAINT "Company_service_id_service_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_position_id_fkey";

-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_id_company_fkey";

-- DropForeignKey
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_id_user_fkey";

-- DropForeignKey
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_client_id_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_pkey",
DROP COLUMN "id",
DROP COLUMN "solicitation_Id",
ADD COLUMN     "idAppointment" TEXT NOT NULL,
ADD COLUMN     "idSolicitation" TEXT NOT NULL,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("idAppointment");

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
DROP COLUMN "id",
ADD COLUMN     "idClient" TEXT NOT NULL,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("idClient");

-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
DROP COLUMN "Name",
DROP COLUMN "criation_date",
DROP COLUMN "id",
ADD COLUMN     "criationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idCompany" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("idCompany");

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
DROP COLUMN "admission_date",
DROP COLUMN "id",
DROP COLUMN "position_id",
ADD COLUMN     "admissionDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "idEmployee" TEXT NOT NULL,
ADD COLUMN     "idPosition" TEXT NOT NULL,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("idEmployee");

-- AlterTable
ALTER TABLE "Position" DROP CONSTRAINT "Position_pkey",
DROP COLUMN "id",
ADD COLUMN     "idPosition" TEXT NOT NULL,
ADD CONSTRAINT "Position_pkey" PRIMARY KEY ("idPosition");

-- AlterTable
ALTER TABLE "Preferences" DROP CONSTRAINT "Preferences_pkey",
DROP COLUMN "id",
ADD COLUMN     "idPreferences" TEXT NOT NULL,
ADD CONSTRAINT "Preferences_pkey" PRIMARY KEY ("idPreferences");

-- AlterTable
ALTER TABLE "Professional" DROP CONSTRAINT "Professional_pkey",
DROP COLUMN "id",
DROP COLUMN "id_company",
DROP COLUMN "id_user",
ADD COLUMN     "idCompany" TEXT NOT NULL,
ADD COLUMN     "idProfessional" TEXT NOT NULL,
ADD COLUMN     "idUser" TEXT NOT NULL,
ADD CONSTRAINT "Professional_pkey" PRIMARY KEY ("idProfessional");

-- AlterTable
ALTER TABLE "Service" DROP CONSTRAINT "Service_pkey",
DROP COLUMN "id",
ADD COLUMN     "idService" TEXT NOT NULL,
ADD CONSTRAINT "Service_pkey" PRIMARY KEY ("idService");

-- AlterTable
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_pkey",
DROP COLUMN "client_id",
DROP COLUMN "id",
ADD COLUMN     "idClient" TEXT NOT NULL,
ADD COLUMN     "idSolicitation" TEXT NOT NULL,
ADD CONSTRAINT "Solicitation_pkey" PRIMARY KEY ("idSolicitation");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "idUser" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("idUser");

-- DropTable
DROP TABLE "Company_preferences";

-- DropTable
DROP TABLE "Company_service";

-- CreateTable
CREATE TABLE "CompanyPreferences" (
    "idCompanyPreferences" TEXT NOT NULL,
    "idCompany" TEXT NOT NULL,
    "idPreferences" TEXT NOT NULL,
    "valor" TEXT NOT NULL,

    CONSTRAINT "CompanyPreferences_pkey" PRIMARY KEY ("idCompanyPreferences")
);

-- CreateTable
CREATE TABLE "CompanyService" (
    "idCompanyService" TEXT NOT NULL,
    "idCompany" TEXT NOT NULL,
    "idService" TEXT NOT NULL,

    CONSTRAINT "CompanyService_pkey" PRIMARY KEY ("idCompanyService")
);

-- CreateTable
CREATE TABLE "ServiceSolicitation" (
    "idServiceSolicitation" TEXT NOT NULL,
    "idSolicitation" TEXT NOT NULL,
    "idService" TEXT NOT NULL,
    "ammount" INTEGER NOT NULL,

    CONSTRAINT "ServiceSolicitation_pkey" PRIMARY KEY ("idServiceSolicitation")
);

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company"("idCompany") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("idClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_idSolicitation_fkey" FOREIGN KEY ("idSolicitation") REFERENCES "Solicitation"("idSolicitation") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_idPosition_fkey" FOREIGN KEY ("idPosition") REFERENCES "Position"("idPosition") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPreferences" ADD CONSTRAINT "CompanyPreferences_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company"("idCompany") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyPreferences" ADD CONSTRAINT "CompanyPreferences_idPreferences_fkey" FOREIGN KEY ("idPreferences") REFERENCES "Preferences"("idPreferences") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyService" ADD CONSTRAINT "CompanyService_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company"("idCompany") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyService" ADD CONSTRAINT "CompanyService_idService_fkey" FOREIGN KEY ("idService") REFERENCES "Service"("idService") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSolicitation" ADD CONSTRAINT "ServiceSolicitation_idSolicitation_fkey" FOREIGN KEY ("idSolicitation") REFERENCES "Solicitation"("idSolicitation") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceSolicitation" ADD CONSTRAINT "ServiceSolicitation_idService_fkey" FOREIGN KEY ("idService") REFERENCES "Service"("idService") ON DELETE RESTRICT ON UPDATE CASCADE;
