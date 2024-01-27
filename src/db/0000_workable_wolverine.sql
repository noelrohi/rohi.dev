CREATE TABLE `rohi.dev_account` (
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`refresh_token` varchar(255),
	`access_token` varchar(255),
	`expires_at` int,
	`token_type` varchar(255),
	`scope` varchar(255),
	`id_token` text,
	`session_state` varchar(255),
	CONSTRAINT `rohi.dev_account_provider_providerAccountId_pk` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `rohi.dev_session` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `rohi.dev_session_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `rohi.dev_user` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp(3) DEFAULT CURRENT_TIMESTAMP(3),
	`image` varchar(255),
	CONSTRAINT `rohi.dev_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rohi.dev_verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `rohi.dev_verificationToken_identifier_token_pk` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE TABLE `rohi.dev_guestbook` (
	`id` varchar(128) NOT NULL,
	`message` text NOT NULL,
	`created_by` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rohi.dev_guestbook_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rohi.dev_blog_views` (
	`id` varchar(128) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`count` int NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rohi.dev_blog_views_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `userId_idx` ON `rohi.dev_account` (`userId`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `rohi.dev_session` (`userId`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `rohi.dev_user` (`email`);--> statement-breakpoint
CREATE INDEX `createdByIdx` ON `rohi.dev_guestbook` (`created_by`);