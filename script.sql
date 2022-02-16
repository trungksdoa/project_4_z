
USE [Project_4]
GO
/****** Object:  Table [dbo].[Books]    Script Date: 02/11/2022 5:15:43 PM ******/
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
	[status] [int] NULL,
 CONSTRAINT [PK_Book] PRIMARY KEY CLUSTERED 
(
	[Books_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 02/11/2022 5:15:43 PM ******/
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
	[Phone] [varchar](50) NOT NULL,
	[Status] [int] NOT NULL,
	[User_createddate] [datetime] NOT NULL,
	[User_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[User_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Wishlist]    Script Date: 02/11/2022 5:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Wishlist](
	[Wishlist_id] [int] IDENTITY(1,1) NOT NULL,
	[Book_id] [varchar](50) NOT NULL,
	[User_id] [varchar](50) NOT NULL,
	[Wishlist_createddate] [datetime] NOT NULL,
 CONSTRAINT [PK_Wishlist] PRIMARY KEY CLUSTERED 
(
	[Wishlist_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[VWishlist]    Script Date: 02/11/2022 5:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE VIEW [dbo].[VWishlist]
AS
SELECT dbo.Wishlist.Wishlist_id, dbo.Users.User_id, dbo.Users.first_name, dbo.Users.last_name, dbo.Books.Book_name, dbo.Books.Book_price, dbo.Books.Books_id
FROM     dbo.Wishlist INNER JOIN
                  dbo.Users ON dbo.Wishlist.User_id = dbo.Users.User_id INNER JOIN
                  dbo.Books ON dbo.Wishlist.Book_id = dbo.Books.Books_id
GO
/****** Object:  Table [dbo].[Admins]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Authors]    Script Date: 02/11/2022 5:15:43 PM ******/
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
	[status] [int] NULL,
 CONSTRAINT [PK_Book_Author] PRIMARY KEY CLUSTERED 
(
	[Author_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Banners]    Script Date: 02/11/2022 5:15:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Banners](
	[Banner_id] [int] IDENTITY(1,1) NOT NULL,
	[Banner_Image] [varchar](50) NOT NULL,
	[Banner_title] [varchar](50) NULL,
	[Banner_content] [varchar](50) NULL,
	[Banner_createddate] [datetime] NOT NULL,
	[Banner_modifieddate] [datetime] NOT NULL,
 CONSTRAINT [PK_Banner] PRIMARY KEY CLUSTERED 
(
	[Banner_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Catagorys]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Group_detail]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Order_Detail]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PDetail]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Voucher]    Script Date: 02/11/2022 5:15:43 PM ******/
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
	[Voucher_value] [int] NULL,
 CONSTRAINT [PK_Voucher] PRIMARY KEY CLUSTERED 
(
	[Voucher_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Web_information]    Script Date: 02/11/2022 5:15:43 PM ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Admins] ON 

INSERT [dbo].[Admins] ([Admin_id], [Admin_email], [Admin_password], [Admin_createddate], [Admin_modifieddate], [Admin_roles]) VALUES (1, N'trungksdoa@gmail.com', N'12465465', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-05T15:54:25.000' AS DateTime), N'owner')
INSERT [dbo].[Admins] ([Admin_id], [Admin_email], [Admin_password], [Admin_createddate], [Admin_modifieddate], [Admin_roles]) VALUES (11, N'trungvo020@gmail.com', N'12345678910', CAST(N'2022-02-07T17:29:34.000' AS DateTime), CAST(N'2022-02-07T17:31:28.000' AS DateTime), N'Product Management')
INSERT [dbo].[Admins] ([Admin_id], [Admin_email], [Admin_password], [Admin_createddate], [Admin_modifieddate], [Admin_roles]) VALUES (12, N'trungvo010@gmail.com', N'12345678910', CAST(N'2022-02-07T17:30:51.000' AS DateTime), CAST(N'2022-02-07T17:30:51.000' AS DateTime), N'Reviews Management')
INSERT [dbo].[Admins] ([Admin_id], [Admin_email], [Admin_password], [Admin_createddate], [Admin_modifieddate], [Admin_roles]) VALUES (13, N'trungvo030@gmail.com', N'12345678910', CAST(N'2022-02-09T21:44:17.000' AS DateTime), CAST(N'2022-02-09T21:45:04.000' AS DateTime), N'Banner Management')
SET IDENTITY_INSERT [dbo].[Admins] OFF
GO
SET IDENTITY_INSERT [dbo].[Authors] ON 

INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (5, N'Ernest-Hemingway', N'Ernest Hemingway', 310, N'<p>Ernest Hemingway was born in Oak Park, Illinois, a suburb of Chicago. Known widely floating system and is one of the famous writers of "Lost Generation". To this day, Hemingway is still the writer most interested in by scholars around his personal life and writing style. Hermingway''s style is described in words but has many layers of meaning, it takes deep thought to fully understand what the author is sending. He was awarded the Nobel Prize for Literature in 1954 and the Pulitzer Prize for "The Old Man and the Sea". Many other works of Hermingway are now considered classics of American literature such as "The Bell Tolls", "Farewell to Arms", "Marxomb''s Short Happiness", "Summer Festival". Man''</p>', CAST(N'1940-01-12T00:00:00.000' AS DateTime), CAST(N'2022-02-09T20:57:58.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (6, N'William_Faulkner', N'William Faulkner', 1251, N'<p>William Faulkner is one of the most important writers of the 20th century with his literary masterpiece "Sound and Fury". He is the only Mississippi writer to have been awarded the Nobel Prize in Literature, and is also one of the few authors to have both won the Nobel Prize as well as the Pulitzer Prize. William Faulkner spent most of his life in Lafayette County, Mississippi, which inspired him to write novels and short stories. The legacy he left for the country''s literature includes 13 books, the most famous ones being "Sound and Fury", "August Sunshine", "When I lay dead" and "Wild Palm".</p>', CAST(N'1977-01-01T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (8, N'Harper_Lee', N'Harper Lee', 754, N'<p>Harper Lee was born and raised in Monroeville, Alabama, the scene of her most famous book, To Kill a Mockingbird, her 1961 Pulitzer Prize-winning book. From then on, for many years she was always known as a single-book writer until Lee released her second book, which was considered a sequel to "To Kill a Mockingbird" called "Let''s go and put watchman” in 2015. Harper Lee received the Presidential Medal of Freedom in 2007 for her literary contributions to the fight against racism in general in the United States. She died in her hometown of Monroeville at the age of 90, just a year after the release of her second novel.</p>', CAST(N'1933-05-04T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (9, N'John_Steinbeck', N'John Steinbeck', 1141, N'<p>John Steinbeck is the most respected author in his hometown of California, known for his works depicting the relentless struggle of people who must cling to their own land to survive. Notable among them is "The Grapes of Wrath", which won the Pulitzer Prize in 1940 about an impoverished family in the Oklahoma wasteland who had to move to California when America was going through the Great Depression. 1930. Besides "The Grapes of Wrath", he is also considered one of the monuments of American literature with a series of beloved works such as "Of Man and Mouse", "East of Eden", " Me, Charley and the American Journey”... John Steinbeck was awarded the Nobel Prize in Literature in 1962 for his great contributions to American literature in particular and the world in general.</p>', CAST(N'1987-01-01T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (10, N'Anthony_Robbins', N'Anthony Robbins', 451, N'<p>With this book, Anthony Robbins has awakened many readers'' souls, aroused creativity and confidence in readers by helping them realize their own worth. Everyone has their own strengths. Everyone has the right to dream and fulfill their passion. It is the negative thoughts, fear, and fear that have caused many people to falter. As understanding that, the author has brought lessons and questions to help awaken the extraordinary person in each individual, which is what makes this book extremely popular.</p>', CAST(N'1998-05-20T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (13, N'Dan_Brown', N'Dan Brown', 1300, N'<p>Dan Brown was born on June 22, 1964, to his family in Exeter, New Hampshire, he is the eldest child in a family of 3 brothers. His mother, Constance (Connie) is a professional musician who plays the church organ. His father, Richard G. Brown is a well-known math teacher, having written textbooks and taught math at Phillips Exeter Private High School since 1962 and retired in 1997.</p>', CAST(N'1987-05-04T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (14, N'Jaroslav_Hasek', N'Jaroslav Hasek', 597, N'<p>Czech modern literature in the first half of the twentieth century had many famous writers, but the outstanding trio was: Jaroslav Hašek (1883-1923), Franz Kafka (1883-1924) and Karel Capek (1890-1938). Franz Kafka composed in German, and Jaroslav Hašek and Karel Capek composed in Czech. Franz Kafka and Karel Capek are two authors who are very familiar to Vietnamese readers. The novel The Fate of the Good Soldier Švejk during the Great War by Jaroslav Hašek is the most translated Czech literary work, so far it has been translated into 62 different languages ??around the world. Since the work was born and until now, not only in the Czech Republic, but also abroad, it has also been adapted into theatrical, film, television and radio scripts. Good Soldier Destiny Švejk in World War is about a guy selling dogs named Švejk in Prague. Funny, good-natured, but at times dull as if on purpose, Švejk enthusiastically participated in the war to serve the Emperor of Austria-Hungary. The novel follows Švejk in awkward situations largely caused by Švejk himself.</p>', CAST(N'1877-06-09T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (16, N'Jeffrey_Archer', N'Jeffrey Archer', 6587, N'<p>"Following up the famous novel TWO FATES about William Kane and Abel Rosnovski, The Prodigal Daughter is a story written by the next generation. A story full of irony, difficult but full of humanity. HER FUTURE IS ADVENTURE Florentyna Rosnovski - Abel''s daughter - with an iron will inherited from her father, she is determined to pursue her goal and ideal, which is to become the first female US President. However, her life, like her father''s, also encountered many obstacles that this ambitious woman had to overcome. With images inspired by great personalities such as "iron lady" Margaret Thatcher, Golda Meer, or Indira Gandhi, Jeffrey Archer has answered readers'' questions about life and fate, about the meaning of life. this life. Overcoming the storm, reaching for the stars is the message that the talented writer wants to convey."</p>', CAST(N'1994-01-01T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
INSERT [dbo].[Authors] ([Author_id], [Author_Image], [Author_name], [Number_published_books], [Author_information], [Datecreated], [Modifieddate], [status]) VALUES (17, N'Higashino_Keigo', N'Higashino Keigo', 866, N'<p>Once athletes have reached the top, but Anjo Takuma, Niwa Junya, Hiura Yusuke and Sakura Shoko share a piece of the past that deserves to be buried. To protect their future, a murder happened to someone who knew the secret, and all related data was destroyed. The plan seems to have gone smoothly and everything will forever sink into ashes... But a beautiful and brutal shadow, like the poisonous spider Tarantula, is lurking through the alleys of the city, seeking revenge one by one... Rushing, horrifying, packed with startling truths. An action-packed masterpiece by the master of detective stories.</p>', CAST(N'1897-10-08T00:00:00.000' AS DateTime), CAST(N'2022-02-09T19:19:33.000' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[Authors] OFF
GO
SET IDENTITY_INSERT [dbo].[Banners] ON 

INSERT [dbo].[Banners] ([Banner_id], [Banner_Image], [Banner_title], [Banner_content], [Banner_createddate], [Banner_modifieddate]) VALUES (1, N'BannerA.jpg', N'OkConDeBeDe', N'OkConDeBeDe', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-10T01:29:21.000' AS DateTime))
INSERT [dbo].[Banners] ([Banner_id], [Banner_Image], [Banner_title], [Banner_content], [Banner_createddate], [Banner_modifieddate]) VALUES (2, N'BannerB.jpg', N'BanhtrangNuongHaiPhong', N'OkConDeBeDe', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-10T02:43:39.000' AS DateTime))
INSERT [dbo].[Banners] ([Banner_id], [Banner_Image], [Banner_title], [Banner_content], [Banner_createddate], [Banner_modifieddate]) VALUES (3, N'BannerC.jpg', N'CheDauXanhHangDo', N'OkConDeBeDe', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-10T02:44:00.000' AS DateTime))
INSERT [dbo].[Banners] ([Banner_id], [Banner_Image], [Banner_title], [Banner_content], [Banner_createddate], [Banner_modifieddate]) VALUES (7, N'BannerD.jpg', N'BanhtroiNuoc', N'OkConDeBeDe', CAST(N'2022-02-10T02:35:00.000' AS DateTime), CAST(N'2022-02-10T02:43:22.000' AS DateTime))
INSERT [dbo].[Banners] ([Banner_id], [Banner_Image], [Banner_title], [Banner_content], [Banner_createddate], [Banner_modifieddate]) VALUES (10, N'banner_2690b4a52fa6e3f8bab7.jpg', N'MapNhuConHeoHaha', N'OkConDeBeDe', CAST(N'2022-02-10T02:41:33.000' AS DateTime), CAST(N'2022-02-10T03:32:57.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Banners] OFF
GO
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book13', N' The Little Book for the Big Leader', 59, 9, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2001-01-01T00:00:00.000' AS DateTime), CAST(N'2002-02-02T00:00:00.000' AS DateTime), CAST(N'2001-01-01T00:00:00.000' AS DateTime), 1, 55, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book14', N'Dac Nhan Tam Magic', 89, 9, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2002-02-02T00:00:00.000' AS DateTime), CAST(N'2003-03-03T00:00:00.000' AS DateTime), CAST(N'2002-02-02T00:00:00.000' AS DateTime), 5, 100, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book15', N'Elite Leadership', 80, 9, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1990-01-01T00:00:00.000' AS DateTime), CAST(N'1992-02-02T00:00:00.000' AS DateTime), CAST(N'1990-01-01T00:00:00.000' AS DateTime), 6, 50, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book16', N'Leader 360 Degrees', 50, 9, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1991-01-01T00:00:00.000' AS DateTime), CAST(N'1993-03-03T00:00:00.000' AS DateTime), CAST(N'1991-01-01T00:00:00.000' AS DateTime), 7, 80, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book17', N'Awakening Africans', 80, 10, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1990-04-04T00:00:00.000' AS DateTime), CAST(N'1991-01-01T00:00:00.000' AS DateTime), CAST(N'1990-04-04T00:00:00.000' AS DateTime), 8, 100, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book18', N'Awakening Infinite Power', 50, 10, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1898-01-01T00:00:00.000' AS DateTime), CAST(N'1899-02-02T00:00:00.000' AS DateTime), CAST(N'1898-01-01T00:00:00.000' AS DateTime), 9, 60, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book19', N'Gifts of Life', 99, 10, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1999-02-02T00:00:00.000' AS DateTime), CAST(N'1999-06-06T00:00:00.000' AS DateTime), CAST(N'1999-02-02T00:00:00.000' AS DateTime), 10, 80, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book20', N'Self-Healing Body', 90, 10, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2002-03-03T00:00:00.000' AS DateTime), CAST(N'2000-01-01T00:00:00.000' AS DateTime), 11, 50, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book21', N'Fort No.', 70, 13, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2000-03-03T00:00:00.000' AS DateTime), CAST(N'2001-04-04T00:00:00.000' AS DateTime), CAST(N'2000-03-03T00:00:00.000' AS DateTime), 12, 100, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book22', N'Transmission Icon', 50, 13, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1999-01-01T00:00:00.000' AS DateTime), CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'1999-01-01T00:00:00.000' AS DateTime), 13, 60, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book23', N'Angels and Demons', 60, 13, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1998-02-02T00:00:00.000' AS DateTime), CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'1998-02-02T00:00:00.000' AS DateTime), 14, 90, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book24', N'Hell', 100, 13, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2001-02-10T00:00:00.000' AS DateTime), CAST(N'2002-01-01T00:00:00.000' AS DateTime), CAST(N'2001-02-10T00:00:00.000' AS DateTime), 15, 100, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book5', N' Sound and Rage', 35, 6, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1990-04-01T00:00:00.000' AS DateTime), CAST(N'1991-02-02T00:00:00.000' AS DateTime), CAST(N'1990-04-01T00:00:00.000' AS DateTime), 16, 15, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book6', N'Category B Wild Palm', 50, 6, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1992-11-12T00:00:00.000' AS DateTime), CAST(N'1993-01-01T00:00:00.000' AS DateTime), CAST(N'1992-11-12T00:00:00.000' AS DateTime), 17, 10, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book7', N'August sunshine', 43, 6, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1998-01-02T00:00:00.000' AS DateTime), CAST(N'1998-12-11T00:00:00.000' AS DateTime), CAST(N'1998-01-02T00:00:00.000' AS DateTime), 18, 40, 2)
INSERT [dbo].[Books] ([Books_id], [Book_name], [Book_price], [Author_id], [Book_description], [Book_releasedate], [Book_modifieddate], [Book_createddate], [PDetail_id], [Amounts], [status]) VALUES (N'Book8', N'Holy Land of Crime', 25, 6, N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'1993-02-20T00:00:00.000' AS DateTime), CAST(N'1993-10-12T00:00:00.000' AS DateTime), CAST(N'1993-02-20T00:00:00.000' AS DateTime), 19, 70, 2)
GO
SET IDENTITY_INSERT [dbo].[Catagorys] ON 

INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (2, N'Foreign Language Books', N'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (3, N'Horros', N'Horror', CAST(N'2020-10-05T00:00:00.000' AS DateTime), CAST(N'2020-10-05T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (4, N'Happy', N'Happy', CAST(N'2020-10-05T00:00:00.000' AS DateTime), CAST(N'2020-10-05T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (5, N'Economic book', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (6, N'Gundam', N'Gundam', CAST(N'2022-10-01T00:00:00.000' AS DateTime), CAST(N'2022-10-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (7, N'Book of Magical Science', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (8, N'Children''s books', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (10, N'Informatics - Foreign Language Books', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (11, N'Book of Common sense – Life', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (12, N'College - University Textbook', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (13, N'Book of Domestic Literature', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
INSERT [dbo].[Catagorys] ([Catagory_id], [Catagory_name], [Catagory_description], [Catagory_createddate], [Catagory_modifieddate]) VALUES (14, N'Personal Development Book', N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et nibh mattis, accumsan eros sed, tempus urna. Donec facilisis, sem quis lacinia laoreet, lacus tortor convallis sem, quis luctus arcu tortor ut nulla. Aenean id egestas tortor, sit amet faucibus mi. Aenean ac leo sem. Suspendisse bibendum eu neque in ullamcorper. Aenean tempus dolor neque, nec suscipit elit aliquet posuere. Nullam varius venenatis nisi, vitae congue nulla varius ac. Curabitur sollicitudin congue suscipit. Maecenas rhoncus augue vel lectus elementum fermentum. Aliquam imperdiet auctor tristique. Vivamus sed dictum urna.', CAST(N'2022-02-02T00:00:00.000' AS DateTime), CAST(N'2022-02-02T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Catagorys] OFF
GO
SET IDENTITY_INSERT [dbo].[Order_Detail] ON 

INSERT [dbo].[Order_Detail] ([Detail_id], [Book_id], [Quantity], [Order_id], [Total]) VALUES (7, N'Book15', 2321, 3, 9889)
INSERT [dbo].[Order_Detail] ([Detail_id], [Book_id], [Quantity], [Order_id], [Total]) VALUES (8, N'Book14', 2321, 3, 9889)
SET IDENTITY_INSERT [dbo].[Order_Detail] OFF
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([Order_id], [Order_createddate], [Order_address], [Order_district], [Order_city], [User_id], [Order_status], [Order_note], [Order_voucher]) VALUES (3, CAST(N'2020-05-05T00:00:00.000' AS DateTime), N'49/12', N'GoVap', N'HoChiMinh', N'206f9804-03ae-442b-b542-d3f2e836ca52', 1, N'asdsa', N'Noel2022')
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
SET IDENTITY_INSERT [dbo].[PDetail] ON 

INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (1, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (5, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (6, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (7, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (8, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (9, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (10, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (11, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (12, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (13, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (14, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (15, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (16, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (17, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (18, N'nguyencongtru.jpg', N'2321', 3232, N'123', N'21', N'3')
INSERT [dbo].[PDetail] ([Pdetail_id], [image_link], [Format], [Pages], [Dimensions], [Language], [Illustrations_note]) VALUES (19, N'Database.pngBooks_', N'124546', 165, N'loreammmmm', N'loreammmmm', N'loreammmmm')
SET IDENTITY_INSERT [dbo].[PDetail] OFF
GO
SET IDENTITY_INSERT [dbo].[Review] ON 

INSERT [dbo].[Review] ([Review_id], [Review_title], [Review_content], [Rating_start], [Active], [Created_date], [User_id], [Book_id]) VALUES (12, N'ok', N'Ok', 5, 1, CAST(N'2022-02-02T00:00:00.000' AS DateTime), N'44fa90e8-09ad-4f25-be5f-3d902691c17b', N'Book13')
INSERT [dbo].[Review] ([Review_id], [Review_title], [Review_content], [Rating_start], [Active], [Created_date], [User_id], [Book_id]) VALUES (13, N'ok', N'Ok', 5, 2, CAST(N'2022-02-02T00:00:00.000' AS DateTime), N'44fa90e8-09ad-4f25-be5f-3d902691c17b', N'Book14')
INSERT [dbo].[Review] ([Review_id], [Review_title], [Review_content], [Rating_start], [Active], [Created_date], [User_id], [Book_id]) VALUES (14, N'ok', N'Ok', 5, 2, CAST(N'2022-02-02T00:00:00.000' AS DateTime), N'44fa90e8-09ad-4f25-be5f-3d902691c17b', N'Book15')
INSERT [dbo].[Review] ([Review_id], [Review_title], [Review_content], [Rating_start], [Active], [Created_date], [User_id], [Book_id]) VALUES (15, N'ok', N'Ok', 5, 1, CAST(N'2022-02-02T00:00:00.000' AS DateTime), N'44fa90e8-09ad-4f25-be5f-3d902691c17b', N'Book16')
INSERT [dbo].[Review] ([Review_id], [Review_title], [Review_content], [Rating_start], [Active], [Created_date], [User_id], [Book_id]) VALUES (19, N'SachDoTe', N'Sieu SIeu do', 2, 2, CAST(N'2022-02-11T12:48:57.000' AS DateTime), N'eba3dbf9-97ff-4aaf-b485-16262e28bd35', N'Book13')
SET IDENTITY_INSERT [dbo].[Review] OFF
GO
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'206f9804-03ae-442b-b542-d3f2e836ca52', N'Nguyen ', N'Cao thaii', N'dsads@gmail.com', N'JFC9V25SKZJK8VKJUJO', N'0335857134', 1, CAST(N'2022-02-03T23:36:56.000' AS DateTime), CAST(N'2022-02-11T14:29:31.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'44fa90e8-09ad-4f25-be5f-3d902691c17b', N'vo', N'hoang trung', N'21312312sda@gmail.com', N'213213232', N'033585714', 2, CAST(N'2022-01-24T22:51:37.000' AS DateTime), CAST(N'2022-02-03T19:53:05.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'72bc59c9-d023-41f3-82cf-09e76efed251', N'Vo', N'trung', N'test@gmail.com', N'01264941005qQ', N'335857134', 2, CAST(N'2022-01-24T21:14:48.000' AS DateTime), CAST(N'2022-01-24T21:14:48.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'89efd255-afde-4d4e-a0e5-aa14e7bea315', N'Vo', N'Hoang trung', N'trungvo0022@gmail.com', N'01264941005qQ', N'0765857135', 2, CAST(N'2022-01-20T19:25:47.000' AS DateTime), CAST(N'2022-02-03T22:06:04.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'8b2067d9-62a1-412e-a649-091d379ead5c', N'VoHoangTrung', N'Hoang sdad', N'dsadsadsa@gmail.com', N'213213232', N'033585714', 1, CAST(N'2022-01-24T22:44:17.000' AS DateTime), CAST(N'2022-02-03T19:43:22.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'c3df6890-a414-443f-a841-de084c2bed79', N'toan', N'trung', N'toandeptrai@gmail.com', N'toan123456', N'0965482015', 2, CAST(N'2022-02-07T09:29:55.000' AS DateTime), CAST(N'2022-02-07T09:29:55.000' AS DateTime))
INSERT [dbo].[Users] ([User_id], [first_name], [last_name], [User_email], [User_password], [Phone], [Status], [User_createddate], [User_modifieddate]) VALUES (N'eba3dbf9-97ff-4aaf-b485-16262e28bd35', N'Vo', N'trung', N'trungksdoa@gmail.com', N'1FFRUQTYHF7GN56X597', N'335857134', 1, CAST(N'2022-01-24T22:52:55.000' AS DateTime), CAST(N'2022-01-24T22:52:55.000' AS DateTime))
GO
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'LionTet', N'Discount 12%', N'Discount 12%', 1, CAST(N'2022-02-10T13:06:16.130' AS DateTime), CAST(N'2022-02-10T13:06:16.130' AS DateTime), 12)
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'NghiaVuQuanSu2022', N'Discount 20% cho sinh vien nghia vu quan su', N'Discount for any order', 1, CAST(N'2022-01-31T06:04:23.000' AS DateTime), CAST(N'2022-02-10T13:04:23.603' AS DateTime), 20)
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'Noel2022', N'Noel', N'Discount 10,000', 1, CAST(N'2022-02-05T00:00:00.000' AS DateTime), CAST(N'2022-05-04T00:00:00.000' AS DateTime), 100)
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'Test', N'sadadsa', N'Ok', 1, CAST(N'2022-02-10T13:05:44.090' AS DateTime), CAST(N'2022-02-10T13:05:44.090' AS DateTime), 10)
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'Tet2022', N'sadadsa', N'Discount 10%', 1, CAST(N'2022-02-10T13:07:44.660' AS DateTime), CAST(N'2022-02-10T13:07:44.660' AS DateTime), 10)
INSERT [dbo].[Voucher] ([Voucher_id], [Voucher_title], [Voucher_description], [Voucher_status], [Voucher_from], [Voucher_to], [Voucher_value]) VALUES (N'TrungThu2022', N'Discount 10%', N'Discount 10%', 1, CAST(N'2022-02-10T13:02:03.250' AS DateTime), CAST(N'2022-02-10T13:02:03.250' AS DateTime), 10)
GO
SET IDENTITY_INSERT [dbo].[Web_information] ON 

INSERT [dbo].[Web_information] ([id], [Logo_name_path], [address], [phonenum], [timeservice], [email]) VALUES (1, N'Logo.png', N'49/12', N'0335857134', N'Working at 10:00 AM to 10:00 PM', N'trungksdoa@gmail.com')
SET IDENTITY_INSERT [dbo].[Web_information] OFF
GO
SET IDENTITY_INSERT [dbo].[Wishlist] ON 

INSERT [dbo].[Wishlist] ([Wishlist_id], [Book_id], [User_id], [Wishlist_createddate]) VALUES (54, N'Book16', N'206f9804-03ae-442b-b542-d3f2e836ca52', CAST(N'2022-02-11T14:47:59.000' AS DateTime))
INSERT [dbo].[Wishlist] ([Wishlist_id], [Book_id], [User_id], [Wishlist_createddate]) VALUES (59, N'Book17', N'206f9804-03ae-442b-b542-d3f2e836ca52', CAST(N'2022-02-11T14:47:59.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Wishlist] OFF
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
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Wishlist"
            Begin Extent = 
               Top = 7
               Left = 48
               Bottom = 170
               Right = 280
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Books"
            Begin Extent = 
               Top = 7
               Left = 597
               Bottom = 170
               Right = 823
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Users"
            Begin Extent = 
               Top = 7
               Left = 328
               Bottom = 170
               Right = 549
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 1200
         Width = 2136
         Width = 1200
         Width = 1200
         Width = 1200
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1176
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1356
         SortOrder = 1416
         GroupBy = 1350
         Filter = 1356
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VWishlist'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'VWishlist'
GO
