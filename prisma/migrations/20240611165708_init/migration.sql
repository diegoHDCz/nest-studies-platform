-- CreateTable
CREATE TABLE "Lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "watched" BOOLEAN NOT NULL
);
