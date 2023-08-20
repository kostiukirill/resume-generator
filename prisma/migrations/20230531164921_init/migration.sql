-- CreateTable
CREATE TABLE "MyExperience" (
    "dates" TEXT NOT NULL,
    "nameCompany" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    CONSTRAINT "MyExperience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "MyExperience_adminId_key" ON "MyExperience"("adminId");
