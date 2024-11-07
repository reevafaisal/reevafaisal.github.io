# Projects
## Future of Programming Lab
### Hazel - Tutorial Systems
#### [GitHub Repo](https://github.com/hazelgrove/hazel/pull/1330) | 07/2024 – present  
My current project involves creating and adding a new tutorial mode functionality to Hazel for new users to adapt to the interface. I am working with editor states and ensuring that new users can interact with and receive feedback for their code to familiarize themselves with the syntax and functionality of the programming environment. (PI: Cyrus Omar, Assistant Professor).
<p>
  <iframe src="https://hazel.org/build/dev/" width="100%" height="400" frameborder="0" scrolling="yes"></iframe>  
</p> 
<p> 
Technologies: OCaml, Reason</p>

### DIY Hazelnut
#### [GitHub Repo](https://github.com/reevafaisal/diyHazelnut) | 06/2024  
An implementation of [Hazelnut: A Bidirectionally Typed Structure Editor Calculus](https://dl.acm.org/doi/10.1145/3009837.3009900). Implemented core features of Hazelnut in Reason (OCaml), focusing on bidirectional type synthesis and cursor erasure for functional expressions. Developed key modules for handling higher-order types, expressions, and their cursors, ensuring accurate type compatibility. The building of a hazelnut expression and its type synthesis can be viewed by using the webapp.  
<p> 
Technologies: Reason</p>

## Insta485 Client-Side Web Application
#### [Demo](http://ec2-18-219-187-14.us-east-2.compute.amazonaws.com/) | 10/2024  
Developed an Instagram clone as part of a three-project sequence for EECS 485, focusing on building client-side dynamic pages using JavaScript, React, and AJAX. Refactored the server-side logic from Flask into a REST API to handle asynchronous data requests, enabling real-time updates for user interactions such as likes, comments, and infinite scrolling without page reloads. The project also includes features like double-click to like and seamless data fetching. The following credentials can be used to test the system, username: awdeorio, password: chickens. To login as any of the other users within the app, the password for login is "password".
<p>
  <img src="demo-infinitescroll-ezgif.com-video-to-gif-converter.gif" width="240px">
  <img src="demo-insta485-heart-ezgif.com-video-to-gif-converter.gif" width="240px">
</p>  
Technologies: Python, SQL, HTML, CSS, JavaScript, React, Flask, AWS  


## Data Retrieval and Parsing using Web Scraping and APIs
#### 09/2024 
Developed and implemented solutions for extracting and parsing data from various sources using both web scraping and APIs. Utilized depth-first search (DFS) to handle hierarchical data structures, transforming JSON data into structured DataFrames for analysis. Leveraged Python and BeautifulSoup for HTML parsing, along with API calls to collect, clean, and organize data from sources such as a fake [online bookstore](https://books.toscrape.com/) and the [Financial Modelling Prep](https://site.financialmodelingprep.com/playground?url=daily-chart-charts) API. Ensured data accuracy by handling edge cases, such as missing or incomplete records.
<p> 
  <img src="Screenshot 2024-10-12 at 2.56.08 PM.png" width="100%">
  <img src="Screenshot 2024-10-12 at 2.56.49 PM.png" width="100%"> 
</p>  
Technologies: Python, Pandas, NumPy, Beautiful Soup, JSON, HTML

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

Technologies: Python, Pandas, NumPy, Plotly 

## Travelling Salesman Problem
#### 06/2024                                                                                                
Applied branch and bound algorithm to solve TSP problem for complete weighted graph, used MST to get the lower bound for remaining cost, and explored various heuristic approaches to achieve a nearly-optimal solution. To find the optimal tour, we started with our nearly optimal solution and then employed the brute-force method of exhaustive enumeration to achieve the optimal path while being time efficient. 
<p> 
  <img src="Screenshot 2024-11-06 at 10.37.14 AM.png" width="80%">
  <img src="Screenshot 2024-11-06 at 10.37.44 AM.png" width="80%"> 
</p>  

Technologies: C++


## Pixel Crafter 
#### [Demo](https://reevafaisal.pythonanywhere.com/) | [ReadMe](https://github.com/reevafaisal/Image_Processing_ObjectOrientedProgramming) | 06/2023  
Collaborated in a team of two to design and implement an image-processing application. Leveraged object-oriented programming and inheritance to simulate a monetized structure, enabling premium features for advanced image processing tasks for the original class project. Integrated a KNN classifier for image label prediction. Voluntarily developed both a GUI and a CLI to enhance user interaction, streamline processing workflows, and track image processing costs, optimizing user experience across multiple interfaces. 
<iframe src="https://reevafaisal.pythonanywhere.com" width="100%" height="400" frameborder="0" scrolling="yes"></iframe>   
Technologies: Python, HTML, CSS, Jinja, Flask 












