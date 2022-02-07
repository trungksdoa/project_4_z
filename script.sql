USE [Project_4]
GO
/****** Object:  Table [dbo].[Admins]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admins](
	[Admin_id] [int] IDENTITY(1,1) NOT NULL,
	[Admin_email] [varchar](50) NOT NULL,
	[Admin_password] [varchar](50) NOT NULL,
	[Admin_createddate] [datetime] NOT NULL,
	[Admin_modifieddate] [datetime] NOT NULL,
	[Admin_roles] [varchar](50) NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Admin_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Authors]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Authors](
	[Author_id] [int] IDENTITY(1,1) NOT NULL,
	[Author_Image] [varchar](50) NOT NULL,
	[Author_name] [varchar](50) NOT NULL,
	[Number_published_books] [int] NOT NULL,
	[Author_information] [varchar](max) NOT NULL,
	[Datecreated] [datetime] NOT NULL,
	[Modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_Book_Author] PRIMARY KEY CLUSTERED 
(
	[Author_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banners]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banners](
	[Banner_id] [int] IDENTITY(1,1) NOT NULL,
	[Banner_Image] [varchar](50) NOT NULL,
	[Banner_title] [varchar](50) NULL,
	[Banner_content] [text] NULL,
	[Banner_createddate] [varchar](10) NOT NULL,
	[Banner_modifieddate] [varchar](10) NOT NULL,
 CONSTRAINT [PK_Banner] PRIMARY KEY CLUSTERED 
(
	[Banner_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Books]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Books](
	[Books_id] [varchar](50) NOT NULL,
	[Book_name] [varchar](50) NOT NULL,
	[Book_price] [int] NOT NULL,
	[Author_id] [int] NOT NULL,
	[Book_description] [varchar](max) NULL,
	[Book_releasedate] [datetime] NOT NULL,
	[Book_modifieddate] [datetime] NOT NULL,
	[Book_createddate] [datetime] NOT NULL,
	[PDetail_id] [int] NOT NULL,
	[Amounts] [int] NOT NULL,
 CONSTRAINT [PK_Book] PRIMARY KEY CLUSTERED 
(
	[Books_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Catagory_news]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Catagory_news](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[description] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Catagory_news] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Catagorys]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Catagorys](
	[Catagory_id] [int] IDENTITY(1,1) NOT NULL,
	[Catagory_name] [varchar](50) NOT NULL,
	[Catagory_description] [varchar](max) NOT NULL,
	[Catagory_createddate] [datetime] NOT NULL,
	[Catagory_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_Book_Catagory] PRIMARY KEY CLUSTERED 
(
	[Catagory_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Group_detail]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Group_detail](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Catagory_id] [int] NOT NULL,
	[Book_id] [varchar](50) NOT NULL,
	[Group_createddate] [datetime] NOT NULL,
	[Group_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_Group_detail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Group_New_detail]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Group_New_detail](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Catagorynew_id] [int] NOT NULL,
	[news_id] [int] NOT NULL,
 CONSTRAINT [PK_Group_Cata_detail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[News]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[News_id] [int] IDENTITY(1,1) NOT NULL,
	[News_images] [varchar](50) NOT NULL,
	[News_title] [varchar](255) NOT NULL,
	[News_content] [varchar](max) NOT NULL,
	[Views] [int] NOT NULL,
	[News_createddate] [datetime] NOT NULL,
	[News_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_News] PRIMARY KEY CLUSTERED 
(
	[News_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notification]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[notification_id] [int] IDENTITY(1,1) NOT NULL,
	[notification_content] [varchar](255) NULL,
	[notification_user_id] [varchar](50) NULL,
	[notification_createddate] [varchar](10) NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[notification_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_Detail]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Order_Detail](
	[Detail_id] [int] IDENTITY(1,1) NOT NULL,
	[Book_id] [varchar](50) NOT NULL,
	[Quantity] [int] NOT NULL,
	[Order_id] [int] NOT NULL,
	[Total] [int] NOT NULL,
 CONSTRAINT [PK_Orderdetail] PRIMARY KEY CLUSTERED 
(
	[Detail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[Order_id] [int] IDENTITY(1,1) NOT NULL,
	[Order_createddate] [datetime] NOT NULL,
	[Order_address] [varchar](50) NOT NULL,
	[Order_district] [varchar](50) NOT NULL,
	[Order_city] [varchar](50) NOT NULL,
	[User_id] [varchar](50) NOT NULL,
	[Order_status] [int] NOT NULL,
	[Order_note] [varchar](50) NULL,
	[Order_voucher] [varchar](50) NULL,
 CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED 
(
	[Order_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PDetail]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PDetail](
	[Pdetail_id] [int] IDENTITY(1,1) NOT NULL,
	[image_link] [varchar](50) NULL,
	[Format] [varchar](50) NULL,
	[Pages] [int] NULL,
	[Dimensions] [varchar](50) NULL,
	[Language] [varchar](50) NULL,
	[Illustrations_note] [varchar](50) NULL,
 CONSTRAINT [PK_PDetail] PRIMARY KEY CLUSTERED 
(
	[Pdetail_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Review](
	[Review_id] [int] IDENTITY(1,1) NOT NULL,
	[Review_title] [varchar](50) NOT NULL,
	[Review_content] [varchar](255) NOT NULL,
	[Rating_start] [int] NOT NULL,
	[Active] [int] NOT NULL,
	[Created_date] [datetime] NOT NULL,
	[User_id] [varchar](50) NOT NULL,
	[Book_id] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Review] PRIMARY KEY CLUSTERED 
(
	[Review_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[User_id] [varchar](50) NOT NULL,
	[first_name] [varchar](50) NOT NULL,
	[last_name] [varchar](50) NOT NULL,
	[User_email] [varchar](50) NOT NULL,
	[User_password] [varchar](50) NOT NULL,
	[Birthday] [datetime] NOT NULL,
	[Phone] [varchar](50) NOT NULL,
	[Status] [int] NOT NULL,
	[User_createddate] [datetime] NOT NULL,
	[User_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Voucher]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Voucher](
	[Voucher_id] [varchar](50) NOT NULL,
	[Voucher_title] [varchar](50) NOT NULL,
	[Voucher_description] [varchar](255) NOT NULL,
	[Voucher_status] [int] NOT NULL,
	[Voucher_from] [datetime] NOT NULL,
	[Voucher_to] [datetime] NOT NULL,
 CONSTRAINT [PK_Voucher] PRIMARY KEY CLUSTERED 
(
	[Voucher_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Web_information]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Web_information](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Logo_name_path] [varchar](50) NOT NULL,
	[address] [varchar](50) NULL,
	[phonenum] [varchar](50) NULL,
	[timeservice] [varchar](50) NULL,
	[email] [varchar](50) NULL,
 CONSTRAINT [PK_Web_information] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wishlist]    Script Date: 02/07/2022 4:15:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wishlist](
	[Wishlist_id] [int] IDENTITY(1,1) NOT NULL,
	[Book_id] [varchar](50) NOT NULL,
	[User_id] [varchar](50) NOT NULL,
	[Wishlist_createddate] [datetime] NOT NULL,
	[Wishlist_updatedate] [datetime] NOT NULL,
 CONSTRAINT [PK_Wishlist] PRIMARY KEY CLUSTERED 
(
	[Wishlist_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Books]  WITH CHECK ADD  CONSTRAINT [FK_Book_Book_Author] FOREIGN KEY([Author_id])
REFERENCES [dbo].[Authors] ([Author_id])
GO
ALTER TABLE [dbo].[Books] CHECK CONSTRAINT [FK_Book_Book_Author]
GO
ALTER TABLE [dbo].[Books]  WITH CHECK ADD  CONSTRAINT [FK_Book_PDetail] FOREIGN KEY([PDetail_id])
REFERENCES [dbo].[PDetail] ([Pdetail_id])
GO
ALTER TABLE [dbo].[Books] CHECK CONSTRAINT [FK_Book_PDetail]
GO
ALTER TABLE [dbo].[Group_detail]  WITH CHECK ADD  CONSTRAINT [FK_Group_detail_Books] FOREIGN KEY([Book_id])
REFERENCES [dbo].[Books] ([Books_id])
GO
ALTER TABLE [dbo].[Group_detail] CHECK CONSTRAINT [FK_Group_detail_Books]
GO
ALTER TABLE [dbo].[Group_detail]  WITH CHECK ADD  CONSTRAINT [FK_Group_detail_Catagorys] FOREIGN KEY([Catagory_id])
REFERENCES [dbo].[Catagorys] ([Catagory_id])
GO
ALTER TABLE [dbo].[Group_detail] CHECK CONSTRAINT [FK_Group_detail_Catagorys]
GO
ALTER TABLE [dbo].[Group_New_detail]  WITH CHECK ADD  CONSTRAINT [FK_Group_Cata_detail_Catagory_news] FOREIGN KEY([Catagorynew_id])
REFERENCES [dbo].[Catagory_news] ([id])
GO
ALTER TABLE [dbo].[Group_New_detail] CHECK CONSTRAINT [FK_Group_Cata_detail_Catagory_news]
GO
ALTER TABLE [dbo].[Group_New_detail]  WITH CHECK ADD  CONSTRAINT [FK_Group_Cata_detail_News] FOREIGN KEY([news_id])
REFERENCES [dbo].[News] ([News_id])
GO
ALTER TABLE [dbo].[Group_New_detail] CHECK CONSTRAINT [FK_Group_Cata_detail_News]
GO
ALTER TABLE [dbo].[Order_Detail]  WITH CHECK ADD  CONSTRAINT [FK_Order_Detail_Book] FOREIGN KEY([Book_id])
REFERENCES [dbo].[Books] ([Books_id])
GO
ALTER TABLE [dbo].[Order_Detail] CHECK CONSTRAINT [FK_Order_Detail_Book]
GO
ALTER TABLE [dbo].[Order_Detail]  WITH CHECK ADD  CONSTRAINT [FK_Order_Detail_Order1] FOREIGN KEY([Order_id])
REFERENCES [dbo].[Orders] ([Order_id])
GO
ALTER TABLE [dbo].[Order_Detail] CHECK CONSTRAINT [FK_Order_Detail_Order1]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Order_User] FOREIGN KEY([User_id])
REFERENCES [dbo].[Users] ([User_id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Order_User]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Voucher] FOREIGN KEY([Order_voucher])
REFERENCES [dbo].[Voucher] ([Voucher_id])
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Voucher]
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD  CONSTRAINT [FK_Review_Book] FOREIGN KEY([Book_id])
REFERENCES [dbo].[Books] ([Books_id])
GO
ALTER TABLE [dbo].[Review] CHECK CONSTRAINT [FK_Review_Book]
GO
ALTER TABLE [dbo].[Review]  WITH CHECK ADD  CONSTRAINT [FK_Review_Users] FOREIGN KEY([User_id])
REFERENCES [dbo].[Users] ([User_id])
GO
ALTER TABLE [dbo].[Review] CHECK CONSTRAINT [FK_Review_Users]
GO
ALTER TABLE [dbo].[Wishlist]  WITH CHECK ADD  CONSTRAINT [FK_Wishlist_Books] FOREIGN KEY([Book_id])
REFERENCES [dbo].[Books] ([Books_id])
GO
ALTER TABLE [dbo].[Wishlist] CHECK CONSTRAINT [FK_Wishlist_Books]
GO
ALTER TABLE [dbo].[Wishlist]  WITH CHECK ADD  CONSTRAINT [FK_Wishlist_Users] FOREIGN KEY([User_id])
REFERENCES [dbo].[Users] ([User_id])
GO
ALTER TABLE [dbo].[Wishlist] CHECK CONSTRAINT [FK_Wishlist_Users]
GO
