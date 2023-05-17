// Finding Missing Data
export const columnValues = [
  { Column: "ID", Count: 0 },
  { Column: "Timestamp", Count: 0 },
  { Column: "Tweet URL", Count: 0 },
  { Column: "Group", Count: 0 },
  { Column: "Collector", Count: 0 },
  { Column: "Category", Count: 0 },
  { Column: "Topic", Count: 0 },
  { Column: "Keywords", Count: 0 },
  { Column: "Account handle", Count: 0 },
  { Column: "Account name", Count: 0 },
  { Column: "Account bio", Count: 15 },
  { Column: "Account type", Count: 0 },
  { Column: "Joined", Count: 0 },
  { Column: "Following", Count: 0 },
  { Column: "Followers", Count: 0 },
  { Column: "Location", Count: 37 },
  { Column: "Tweet", Count: 0 },
  { Column: "Tweet Translated", Count: 0 },
  { Column: "Tweet Type", Count: 0 },
  { Column: "Date posted", Count: 0 },
  { Column: "Screenshot", Count: 94 },
  { Column: "Content type", Count: 0 },
  { Column: "Likes", Count: 0 },
  { Column: "Replies", Count: 0 },
  { Column: "Retweets", Count: 0 },
  { Column: "Quote Tweets", Count: 0 },
  { Column: "Views", Count: 100 },
  { Column: "Rating", Count: 20 },
  { Column: "Reasoning", Count: 0 },
  { Column: "Remarks", Count: 100 },
  { Column: "Add columns here", Count: 100 },
  { Column: "Add columns here.1", Count: 100 },
  { Column: "Add columns here.2", Count: 100 },
  { Column: "Reviewer", Count: 100 },
  { Column: "Review", Count: 100 },
  { Column: "Tweet with Misinfo", Count: 0 },
];

// Categorical data encoding
export const categoricalData = [
  { hasMisinfo: 0, Count: 100 },
  { hasMisinfo: 1, Count: 100 },
];

// Scaling of dates
export const epochConverted = [
  { "Original date posted": 1591566180.0, Epoch: "07/06/20 21:43" },
  { "Original date posted": 1665758640.0, Epoch: "14/10/22 14:44" },
  { "Original date posted": 1595178420.0, Epoch: "19/07/20 17:07" },
  { "Original date posted": 1602691920.0, Epoch: "14/10/20 16:12" },
  { "Original date posted": 1594117920.0, Epoch: "7/7/20 10:32" },
];
