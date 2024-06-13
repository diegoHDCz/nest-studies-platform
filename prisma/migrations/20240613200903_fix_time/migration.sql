-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lesson" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "instructor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techType" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "watched" BOOLEAN DEFAULT false,
    "instructorEmail" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Lesson" ("createdAt", "description", "id", "instructor", "instructorEmail", "techType", "title", "watched") SELECT "createdAt", "description", "id", "instructor", "instructorEmail", "techType", "title", "watched" FROM "Lesson";
DROP TABLE "Lesson";
ALTER TABLE "new_Lesson" RENAME TO "Lesson";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
