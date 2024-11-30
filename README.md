# Projects
## Future of Programming Lab
###   Hazel - Tutorial Systems  
####   [GitHub Repo](https://github.com/hazelgrove/hazel/pull/1330) | [Pull Request](https://github.com/hazelgrove/hazel/pull/1414) | 07/2024 – present  
  - My current project involves building, end-to-end, a new tutorial mode functionality for Hazel to allow new users and students to grasp basic functional programming concepts.
  - I am working with editor states and ensuring that new users can interact with the syntax and functionality of the programming environment.
  - I am also working on creating a new feature that will target giving relevant and directed feedback on user implementations.
  (PI: Cyrus Omar, Assistant Professor)

  <p>
    <iframe src="https://hazel.org/build/dev/" width="100%" height="400" frameborder="0" scrolling="yes"></iframe>  
  </p>  
  <p> 
  Technologies: OCaml, Reason</p>

###   DIY Hazelnut  
####   [GitHub Repo](https://github.com/reevafaisal/diyHazelnut) | 06/2024  
  - An implementation of [Hazelnut: A Bidirectionally Typed Structure Editor Calculus](https://dl.acm.org/doi/10.1145/3009837.3009900).
  - Implemented core features of Hazelnut in Reason (OCaml), focusing on bidirectional type synthesis and cursor erasure for functional expressions.
  - Developed key modules for handling higher-order types, expressions, and their cursors, ensuring accurate type compatibility.
  - The building of a hazelnut expression and its type synthesis can be viewed by using the webapp.  
  <p> 
  Technologies: Reason</p>
  
## Performance Predictions in TB and HIV  
#### [Report](https://reevafaisal.github.io/Performance-Predictions-in-TB-HIV/index.html) | 11/2024  
- This project leverages logistic regression to measure the predictive performance of Case Detection Rate (CDR) in country-specific mortality outcomes for patients with a dual burden of Tuberculosis (TB) and Human Immunodeficiency Viruses (HIV). 
- Using data from the Tuberculosis Burden by Country dataset, it evaluates the role of CDR in determining mortality-to-incidence ratios (MIRs).
- Feature engineering techniques such as logarithmic scaling and quantile transformation were applied to the baseline model to address data skewness and improve model performance.
- The final model demonstrated an improvement in AUC for dual-burden mortality predictions, emphasizing the importance of early case detection in mitigating public health challenges.
  
<!-- <div style="margin-bottom: 5px;">
  <iframe src="plots/MIR_TB_HIV.html" width="100%" height="550px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div> -->
<div style="margin-bottom: 5px;">
  <iframe src="plots/Scatter.html" width="50%" height="250px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div> 
<div style="margin-bottom: 5px;">
  <iframe src="plots/comparison.html" width="50%" height="250px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div>
<p> 
Technologies: Python, Pandas, Scikit-learn </p>

## Insta485 Client-Side Web Application
#### [Demo](http://ec2-18-219-187-14.us-east-2.compute.amazonaws.com/) | 10/2024  
- Developed an Instagram clone as part of a three-project sequence for EECS 485, focusing on building client-side dynamic pages using JavaScript, React, and AJAX.
- Refactored the server-side logic from Flask into a REST API to handle asynchronous data requests, enabling real-time updates for user interactions such as likes, comments, and infinite scrolling without page reloads.
- The project also includes features like double-click to like and seamless data fetching.
- The following credentials can be used to test the system, username: awdeorio, password: chickens.
- To login as any of the other users within the app, the password for login is "password".
<p>
  <img src="demo-infinitescroll-ezgif.com-video-to-gif-converter.gif" width="290px">
  <img src="demo-insta485-heart-ezgif.com-video-to-gif-converter.gif" width="290px">
</p>  
Technologies: Python, SQL, HTML, CSS, JavaScript, React, Flask, AWS  

## Data Retrieval and Parsing using Web Scraping and APIs
#### 09/2024 
- Developed and implemented solutions for extracting and parsing data from various sources using both web scraping and APIs.
- Utilized depth-first search (DFS) to handle hierarchical data structures, transforming JSON data into structured data frames for analysis.
- Leveraged Python and BeautifulSoup for HTML parsing, along with API calls to collect, clean, and organize data from sources such as a fake [online bookstore](https://books.toscrape.com/) and the [Financial Modelling Prep](https://site.financialmodelingprep.com/playground?url=daily-chart-charts) API.
- Ensured data accuracy by handling edge cases, such as missing or incomplete records.

**Online Bookstore:**

| UPC              | Product Type   | Price (excl. tax)   | Price (incl. tax)   | Tax    | Availability            |   Number of reviews | Category   | Rating   | Description                                           | Title                                                 |
|:-----------------|:---------------|:--------------------|:--------------------|:-------|:------------------------|--------------------:|:-----------|:---------|:------------------------------------------------------|:------------------------------------------------------|
| e10e1e165dc8be4a | Books          | Â£22.60             | Â£22.60             | Â£0.00 | In stock (19 available) |                   0 | Default    | Four     | For readers of Laura Hillenbrand's ... | The Boys in the Boat: ... |
| c2e46a2ee3b4a322 | Books          | Â£25.27             | Â£25.27             | Â£0.00 | In stock (19 available) |                   0 | Romance    | Five     | A Michelin two-star chef at twenty ... | Chase Me (Paris Nights #2)                            |
| 00bfed9e18bb36f3 | Books          | Â£34.53             | Â£34.53             | Â£0.00 | In stock (19 available) |                   0 | Romance    | Five     | No matter how busy he keeps himself... | Black Dust                                            |
| 8c9e6bf2467d740d | Books          | Â£20.59             | Â£20.59             | Â£0.00 | In stock (16 available) |                   0 | Default    | Five     | Slay Procrastination, Distraction, ... | The Inefficienc... |

**Financial Modelling Prep:**

|       date |   open |   high |   low |   close |   adjClose |   volume |   unadjustedVolume |   change |   changePercent |    vwap | label         |   changeOverTime |
|:-----------|-------:|-------:|------:|--------:|-----------:|---------:|-------------------:|---------:|----------------:|--------:|:--------------|-----------------:|
| 2024-08-30 |  11.15 |  11.23 | 11.06 |   11.19 |      11.04 | 44977100 |           44977100 |     0.04 |         0.35874 | 11.1575 | August 30, 24 |        0.0035874 |
| 2024-08-29 |  11.02 |  11.2  | 10.99 |   11.11 |      10.96 | 44989200 |           44989200 |     0.09 |         0.8167  | 11.08   | August 29, 24 |        0.008167  |
| 2024-08-28 |  11.1  |  11.19 | 10.98 |   11.04 |      10.89 | 35442200 |           35442200 |    -0.06 |        -0.54054 | 11.0775 | August 28, 24 |       -0.0054054 |
| 2024-08-27 |  11.12 |  11.22 | 10.99 |   11.14 |      10.99 | 44841000 |           44841000 |     0.02 |         0.17986 | 11.1175 | August 27, 24 |        0.0017986 |
| 2024-08-26 |  11.32 |  11.37 | 11.07 |   11.11 |      10.96 | 53070331 |           53070331 |    -0.21 |        -1.86    | 11.2175 | August 26, 24 |       -0.0186    |


  
<!--   <img src="Screenshot 2024-10-12 at 2.56.08 PM.png" width="100%"> -->
<!--   <img src="Screenshot 2024-10-12 at 2.56.49 PM.png" width="100%">  -->

Technologies: Python, Pandas, NumPy, Beautiful Soup, JSON, HTML

<!--
## EDA and Visualizations Toolkit 
#### 09/2024  
As part of our coursework (EECS 398), we used the [Electoral College dataset](https://readysignal.com/electoral-college-data-table/) to analyze the impact of the Electoral College on election outcomes. We first calculated which party won the most votes in each state and then the total number of electoral votes won by each party assuming that the Electoral College in Nebraska and New Hampshire also work similarly to other states as a simplifying assumption. We then used plotly to create a choropleth of the United States in which each 'state' is colored either blue or red, depending on whether the Democratic 'party' or Republican 'party' won the majority of votes in that 'state' in 2020. 

<div style="margin-bottom: 5px;">
  <iframe src="votes_chloropleth1.html" width="100%" height="400px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div>

We employed the [LendingClub dataset](https://github.com/sethns/Data-Preprocessing-in-Python/tree/main) to visualize the relationship between interest rates and borrowers' debt-to-income (DTI) ratios. We place credit scores into four bins to visualize the distribution of interest rates separately for each credit score bin for a more comprehensive analysis. 

<div style="margin-bottom: 5px;">
  <iframe src="loans_box.html" width="100%" height="400px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div>

Cleaned and processed [Universities dataset](https://www.kaggle.com/datasets/mylesoneill/world-university-rankings?datasetId=) by handling missing values for key metrics including names, national rankings, alumni employment and overall score. We then created a visualization to understand if schools with 'University of' in their name had a higher ranking than those without it.

<div style="margin-bottom: 5px;">
  <iframe src="loans_comp.html" width="100%" height="400px" frameborder="0" scrolling="yes" style="margin-bottom: 5px;"></iframe>
</div>  

Technologies: Python, Pandas, NumPy, Plotly -->

## Travelling Salesman Problem
#### 06/2024                                                                                                
- Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal solution.
- To find the optimal tour, we started with our nearly optimal solution and then employed the brute-force method of exhaustive enumeration to achieve the optimal path while being time efficient. 
<p> 
  <img src="Screenshot 2024-11-06 at 10.37.14 AM.png" width="100%">
  <img src="Screenshot 2024-11-06 at 10.37.44 AM.png" width="100%"> 
</p>  

Technologies: C++











