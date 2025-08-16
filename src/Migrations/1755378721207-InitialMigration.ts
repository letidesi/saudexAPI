import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755378721207 implements MigrationInterface {
    name = 'InitialMigration1755378721207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "MedicalCenterAddress" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_3f90a21bef860615c7fcd6ea5b3" DEFAULT NEWSEQUENTIALID(), "isPrincipal" bit NOT NULL CONSTRAINT "DF_58e9fbf51c0f4433d7c43dcd4da" DEFAULT 0, "medicalCenterId" uniqueidentifier NOT NULL, "addressId" uniqueidentifier NOT NULL, CONSTRAINT "PK_3f90a21bef860615c7fcd6ea5b3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Permission" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_96c82eedac1e126a1aa90eb0285" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_d9fbc7e0e21c0e917c998e3287d" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_3da0072e2d300d3dd9277701562" DEFAULT getdate(), "deletedAt" datetime2, "type" nvarchar(100) NOT NULL, CONSTRAINT "UQ_24d5a390ec6ab55b7c8e6469ab5" UNIQUE ("type"), CONSTRAINT "PK_96c82eedac1e126a1aa90eb0285" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "RolePermission" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_94043bebf60911b81c171931502" DEFAULT NEWSEQUENTIALID(), "roleId" uniqueidentifier NOT NULL, "permissionId" uniqueidentifier NOT NULL, CONSTRAINT "PK_94043bebf60911b81c171931502" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Role" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_9309532197a7397548e341e5536" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_60aafced0be084fe3ff143728da" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_b963e225750a16ad1f57b2e1944" DEFAULT getdate(), "deletedAt" datetime2, "type" nvarchar(100) NOT NULL CONSTRAINT "DF_e4448dba55bdb10d4ad5ce08840" DEFAULT 'GUEST', CONSTRAINT "UQ_e4448dba55bdb10d4ad5ce08840" UNIQUE ("type"), CONSTRAINT "PK_9309532197a7397548e341e5536" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "UserRoles" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_a44a2382829972daa2a31345f56" DEFAULT NEWSEQUENTIALID(), "userId" uniqueidentifier NOT NULL, "roleId" uniqueidentifier NOT NULL, CONSTRAINT "PK_a44a2382829972daa2a31345f56" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ContactUsers" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_c398d4e8e2baf4426f8b6b6f9fe" DEFAULT NEWSEQUENTIALID(), "userId" uniqueidentifier NOT NULL, "contactId" uniqueidentifier NOT NULL, CONSTRAINT "PK_c398d4e8e2baf4426f8b6b6f9fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_9862f679340fb2388436a5ab3e4" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_44d12a3355d90f16aa83daa35d4" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_d6c6506bfc576233e6a5c518073" DEFAULT getdate(), "deletedAt" datetime2, "firstName" nvarchar(200) NOT NULL, "lastName" nvarchar(200) NOT NULL, "passwordHash" nvarchar(255) NOT NULL, "address" uniqueidentifier, "addressId" uniqueidentifier, CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_ed0b2f871e3f4a5a24db60c664" ON "User" ("addressId") WHERE "addressId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "Address" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_9034683839599c80ebe9ebb0891" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_6a084844ad9c7679d44e2f2be37" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_aeb4791b2e560c06deccc397e61" DEFAULT getdate(), "deletedAt" datetime2, "street" nvarchar(255) NOT NULL, "number" nvarchar(50), "complement" nvarchar(100), "neighborhood" nvarchar(100) NOT NULL, "city" nvarchar(100) NOT NULL, "state" nvarchar(50) NOT NULL, "zipCode" nvarchar(10) NOT NULL, "user" uniqueidentifier NOT NULL, "userId" uniqueidentifier, CONSTRAINT "PK_9034683839599c80ebe9ebb0891" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_08a96a002044d5ca902ce834d9" ON "Address" ("userId") WHERE "userId" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "Admin" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_3a489f4a44372ff150d7924dc3d" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_7baa45abc9485c82aceddebb00c" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_9c9fef27630ac3b03d17a4d4274" DEFAULT getdate(), "deletedAt" datetime2, "firstName" nvarchar(200) NOT NULL, "lastName" nvarchar(200) NOT NULL, "passwordHash" nvarchar(255) NOT NULL, "addressId" uniqueidentifier, CONSTRAINT "PK_3a489f4a44372ff150d7924dc3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ContactAdmin" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_4dafa06f6d2a358b061a07e8f85" DEFAULT NEWSEQUENTIALID(), "adminId" uniqueidentifier NOT NULL, "contactId" uniqueidentifier NOT NULL, CONSTRAINT "PK_4dafa06f6d2a358b061a07e8f85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Contact" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_9d0ea6f3557586cef53e954d13a" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_131ba30f4b7509077fe723f9c45" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_b64bc104f6d5fec1e50a4b97f31" DEFAULT getdate(), "deletedAt" datetime2, "phone" nvarchar(50), "email" nvarchar(100) NOT NULL, CONSTRAINT "PK_9d0ea6f3557586cef53e954d13a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ContactMedicalCenter" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_5d354aa2f0c8378bf30b9967dfc" DEFAULT NEWSEQUENTIALID(), "medicalCenterId" uniqueidentifier NOT NULL, "contactId" uniqueidentifier NOT NULL, CONSTRAINT "PK_5d354aa2f0c8378bf30b9967dfc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Medications" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_97fd9c126414ba14136a1c7a661" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_a69c733f6afb63981a03da56a4c" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_5fd55eaa3b052d606e1bbed936f" DEFAULT getdate(), "deletedAt" datetime2, "type" nvarchar(50) CONSTRAINT CHK_e58c99639989e139ae5930ecac_ENUM CHECK(type IN ('0','1','2')) NOT NULL, "name" nvarchar(255) NOT NULL, "quantity" int NOT NULL CONSTRAINT "DF_f6e71fa7de8e7fe1d3c55065c1d" DEFAULT 0, "medicalCenterId" uniqueidentifier NOT NULL, CONSTRAINT "PK_97fd9c126414ba14136a1c7a661" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Doctor" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_e51d7afee336c51f147089232fb" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_b651edd2a687f083f5265fa0d06" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_01953292696b8d1aa33b35c200e" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "specialty" nvarchar(255) NOT NULL, "gender" nvarchar(50) CONSTRAINT CHK_17f0b317aeddd71d62cd52190f_ENUM CHECK(gender IN ('0','1','2','3','4')) NOT NULL, "availableTickets" int NOT NULL CONSTRAINT "DF_50d81f2830b223feee6c5911a72" DEFAULT 0, "medicalCenterId" uniqueidentifier NOT NULL, CONSTRAINT "PK_e51d7afee336c51f147089232fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "MedicalCenter" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_76181a53b5b2c6693d559d03704" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_bdfd279e6934738e5bc07c05d98" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_c13781b51f6c6dc5caf48d04831" DEFAULT getdate(), "deletedAt" datetime2, "name" nvarchar(255) NOT NULL, "type" nvarchar(50) NOT NULL, "cnpj" nvarchar(20) NOT NULL, CONSTRAINT "UQ_6a3bb477632a493697ab19b3555" UNIQUE ("cnpj"), CONSTRAINT "PK_76181a53b5b2c6693d559d03704" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "OperatingHour" ("id" uniqueidentifier NOT NULL CONSTRAINT "DF_ac02282f50144c9cc7442a57307" DEFAULT NEWSEQUENTIALID(), "createdAt" datetime2 NOT NULL CONSTRAINT "DF_256ba442a23ea9326200d72beb0" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_3e93bdfb427adfe0f1e6be09dca" DEFAULT getdate(), "deletedAt" datetime2, "dayOfWeek" nvarchar(100) NOT NULL, "openTime" time NOT NULL, "closeTime" time NOT NULL, "medicalCenterId" uniqueidentifier NOT NULL, CONSTRAINT "PK_ac02282f50144c9cc7442a57307" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "MedicalCenterAddress" ADD CONSTRAINT "FK_07f2a66daaca406a5e6dcd7c238" FOREIGN KEY ("medicalCenterId") REFERENCES "MedicalCenter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "MedicalCenterAddress" ADD CONSTRAINT "FK_fe940946ca61d2a828b16e82a94" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "RolePermission" ADD CONSTRAINT "FK_4b7362ec07fb49ca70220df756a" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "RolePermission" ADD CONSTRAINT "FK_23c39b29f70bf4f86853f845438" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_a6b832f61ba4bd959c838a1953b" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_5f1d6fdea1024424fd60b193b9f" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" ADD CONSTRAINT "FK_8969159957dcd918b935ff9e488" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Address" ADD CONSTRAINT "FK_08a96a002044d5ca902ce834d97" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Admin" ADD CONSTRAINT "FK_d74755ee98dabbfa8075158abf5" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactAdmin" ADD CONSTRAINT "FK_ddf2748a99c52a03787970bd899" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactAdmin" ADD CONSTRAINT "FK_bf9549f37a1bd309dc2dfd151ad" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactMedicalCenter" ADD CONSTRAINT "FK_36d58dbff72906bc6e8eb147b8f" FOREIGN KEY ("medicalCenterId") REFERENCES "MedicalCenter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ContactMedicalCenter" ADD CONSTRAINT "FK_94f7e471beea479601c9943f5d2" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Medications" ADD CONSTRAINT "FK_d24dfc76fb8919195c8e4d3aa6d" FOREIGN KEY ("medicalCenterId") REFERENCES "MedicalCenter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Doctor" ADD CONSTRAINT "FK_1d28b07210ba4d8547ecee0a886" FOREIGN KEY ("medicalCenterId") REFERENCES "MedicalCenter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "OperatingHour" ADD CONSTRAINT "FK_e6553301c0242fc8a5bd6a304b6" FOREIGN KEY ("medicalCenterId") REFERENCES "MedicalCenter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "OperatingHour" DROP CONSTRAINT "FK_e6553301c0242fc8a5bd6a304b6"`);
        await queryRunner.query(`ALTER TABLE "Doctor" DROP CONSTRAINT "FK_1d28b07210ba4d8547ecee0a886"`);
        await queryRunner.query(`ALTER TABLE "Medications" DROP CONSTRAINT "FK_d24dfc76fb8919195c8e4d3aa6d"`);
        await queryRunner.query(`ALTER TABLE "ContactMedicalCenter" DROP CONSTRAINT "FK_94f7e471beea479601c9943f5d2"`);
        await queryRunner.query(`ALTER TABLE "ContactMedicalCenter" DROP CONSTRAINT "FK_36d58dbff72906bc6e8eb147b8f"`);
        await queryRunner.query(`ALTER TABLE "ContactAdmin" DROP CONSTRAINT "FK_bf9549f37a1bd309dc2dfd151ad"`);
        await queryRunner.query(`ALTER TABLE "ContactAdmin" DROP CONSTRAINT "FK_ddf2748a99c52a03787970bd899"`);
        await queryRunner.query(`ALTER TABLE "Admin" DROP CONSTRAINT "FK_d74755ee98dabbfa8075158abf5"`);
        await queryRunner.query(`ALTER TABLE "Address" DROP CONSTRAINT "FK_08a96a002044d5ca902ce834d97"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_ed0b2f871e3f4a5a24db60c6644"`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_8969159957dcd918b935ff9e488"`);
        await queryRunner.query(`ALTER TABLE "ContactUsers" DROP CONSTRAINT "FK_f1320c2b10321afb95fc05ce6e2"`);
        await queryRunner.query(`ALTER TABLE "UserRoles" DROP CONSTRAINT "FK_5f1d6fdea1024424fd60b193b9f"`);
        await queryRunner.query(`ALTER TABLE "UserRoles" DROP CONSTRAINT "FK_a6b832f61ba4bd959c838a1953b"`);
        await queryRunner.query(`ALTER TABLE "RolePermission" DROP CONSTRAINT "FK_23c39b29f70bf4f86853f845438"`);
        await queryRunner.query(`ALTER TABLE "RolePermission" DROP CONSTRAINT "FK_4b7362ec07fb49ca70220df756a"`);
        await queryRunner.query(`ALTER TABLE "MedicalCenterAddress" DROP CONSTRAINT "FK_fe940946ca61d2a828b16e82a94"`);
        await queryRunner.query(`ALTER TABLE "MedicalCenterAddress" DROP CONSTRAINT "FK_07f2a66daaca406a5e6dcd7c238"`);
        await queryRunner.query(`DROP TABLE "OperatingHour"`);
        await queryRunner.query(`DROP TABLE "MedicalCenter"`);
        await queryRunner.query(`DROP TABLE "Doctor"`);
        await queryRunner.query(`DROP TABLE "Medications"`);
        await queryRunner.query(`DROP TABLE "ContactMedicalCenter"`);
        await queryRunner.query(`DROP TABLE "Contact"`);
        await queryRunner.query(`DROP TABLE "ContactAdmin"`);
        await queryRunner.query(`DROP TABLE "Admin"`);
        await queryRunner.query(`DROP INDEX "REL_08a96a002044d5ca902ce834d9" ON "Address"`);
        await queryRunner.query(`DROP TABLE "Address"`);
        await queryRunner.query(`DROP INDEX "REL_ed0b2f871e3f4a5a24db60c664" ON "User"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "ContactUsers"`);
        await queryRunner.query(`DROP TABLE "UserRoles"`);
        await queryRunner.query(`DROP TABLE "Role"`);
        await queryRunner.query(`DROP TABLE "RolePermission"`);
        await queryRunner.query(`DROP TABLE "Permission"`);
        await queryRunner.query(`DROP TABLE "MedicalCenterAddress"`);
    }

}
