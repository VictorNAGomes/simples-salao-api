-- CreateTable
CREATE TABLE "User" (
    "idUser" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "idClient" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "companyIdCompany" TEXT,
    CONSTRAINT "Client_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Client_companyIdCompany_fkey" FOREIGN KEY ("companyIdCompany") REFERENCES "Company" ("idCompany") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Professional" (
    "idProfessional" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "idCompany" TEXT NOT NULL,
    CONSTRAINT "Professional_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company" ("idCompany") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Professional_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("idUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "idCompany" TEXT NOT NULL PRIMARY KEY,
    "cnpj" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "creationDate" DATETIME NOT NULL,
    "timeUnit" INTEGER NOT NULL,
    "openingTime" INTEGER NOT NULL,
    "closingTime" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "idService" TEXT NOT NULL PRIMARY KEY,
    "idCompany" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "duration" INTEGER NOT NULL,
    CONSTRAINT "Service_idCompany_fkey" FOREIGN KEY ("idCompany") REFERENCES "Company" ("idCompany") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointment" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "idClient" TEXT NOT NULL,
    "idProfessional" TEXT NOT NULL,
    "idService" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "approved" BOOLEAN NOT NULL,
    "createdByProfessional" BOOLEAN NOT NULL,
    CONSTRAINT "Appointment_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("idClient") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_idProfessional_fkey" FOREIGN KEY ("idProfessional") REFERENCES "Professional" ("idProfessional") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointment_idService_fkey" FOREIGN KEY ("idService") REFERENCES "Service" ("idService") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Client_idUser_key" ON "Client"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "Professional_idUser_key" ON "Professional"("idUser");

-- CreateIndex
CREATE UNIQUE INDEX "Company_cnpj_key" ON "Company"("cnpj");
