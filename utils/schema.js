// import { serial, text, varchar } from "drizzle-orm/mysql-core";
import { pgTable,serial,text,varchar } from "drizzle-orm/pg-core";

export const Fang = pgTable('fang',{
    id:serial('id').primaryKey(),
    jsonFangResp:text('jsonFangResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
    fangId:varchar('fangId').notNull(),
})