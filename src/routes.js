const routes = {
	home: "/",
	contact: "/contact",
	login: "/login",
	register: "/register",
	about: "/about",
	blog: "/blog",
	blogPost: (title) => `/blog/${title}`,
	dashboard: "/dashboard",
	newPage: "/new",
	userDashboard: "/user/dashboard",
	buyProduct: "/user/buy-product",
	viewProduct: "/user/view-product",
	orderSummary: "/user/payment-summary",
	paymentSuccess: "/user/payment-success",
	Congrats: "/user/congrats",
	userNotification: "/user/notification",
	userMyAccount: "/user/my-account",
	userResetPassword: "/user/reset-password",
	ourFeatures: "/user/our-features",
	pricePlan: "/user/price-plan",
	productHistory: "/user/product-history",
	ManageRegisteredProduct: "/user/manage-registered-product",
	adminDashboard: "/admin",
	addFAQ: "/add-faq",
	manageFAQ: "/manage-faq",
	addSubscription: "/add-subscription",
	manageSubscription: "/manage-subscription",
	addTestimony: "/add-testimony",
	manageTestimony: "/manage-testimony",
	addProduct: "/add-product",
	manageProduct: "/manage-product",
	adminResetPassword: "/admin/reset-password",
	adminMyAccount: "/admin/my-account",
	aboutEdit: "/about/edit",
	contactEdit: "/contact/edit",
	addBlog: "/add-blog",
	manageBlog: "/manage-blog",
	schoolManagement: "/school-management",
};

export default routes;
