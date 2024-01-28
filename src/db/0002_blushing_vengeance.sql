CREATE TABLE `rohidev_account` (
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
	CONSTRAINT `rohidev_account_provider_providerAccountId_pk` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `rohidev_session` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `rohidev_session_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `rohidev_user` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp(3) DEFAULT CURRENT_TIMESTAMP(3),
	`image` varchar(255),
	CONSTRAINT `rohidev_user_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rohidev_verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `rohidev_verificationToken_identifier_token_pk` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE TABLE `rohidev_guestbook` (
	`id` varchar(128) NOT NULL,
	`message` text NOT NULL,
	`created_by` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rohidev_guestbook_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `rohidev_blog_views` (
	`id` varchar(128) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`count` int NOT NULL,
	`created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `rohidev_blog_views_id` PRIMARY KEY(`id`),
	CONSTRAINT `rohidev_blog_views_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
DROP TABLE `rohi.dev_account`;--> statement-breakpoint
DROP TABLE `rohi.dev_session`;--> statement-breakpoint
DROP TABLE `rohi.dev_user`;--> statement-breakpoint
DROP TABLE `rohi.dev_verificationToken`;--> statement-breakpoint
DROP TABLE `rohi.dev_guestbook`;--> statement-breakpoint
DROP TABLE `rohi.dev_blog_views`;--> statement-breakpoint
CREATE INDEX `userId_idx` ON `rohidev_account` (`userId`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `rohidev_session` (`userId`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `rohidev_user` (`email`);--> statement-breakpoint
CREATE INDEX `createdByIdx` ON `rohidev_guestbook` (`created_by`);--> statement-breakpoint
CREATE INDEX `slug_idx` ON `rohidev_blog_views` (`slug`);