# ⚡ CodeLab Practical Suite (Java & ADBMS 1st Semester)

An ultra-modern, dark-themed, enhanced web application containing all coding practicals for **Java Programming** (12 Experiments) and **ADBMS (MySQL & MongoDB)** (10 Experiments) extracted and compiled directly from the lab records.

---

## 🚀 How to Run the Website

You have two convenient ways to view the website:

### Option 1: Double-Click Launcher
- Double-click [`start_website.bat`](start_website.bat) or double-click [`index.html`](index.html) to open directly in your favorite web browser (Chrome, Edge, Firefox, Brave). No setup or server required!

### Option 2: Local Dev Server
If you prefer running via a local web server:
```bash
# Using Python:
python -m http.server 5173

# Or using Node:
npx serve .
```
Then visit: `http://localhost:5173/`

---

## 🎨 Design & Enhancement Features

- **Obsidian Dark Theme**: Crafted with high-contrast slate surfaces, glowing borders, vibrant amber accents for Java, and neon cyan accents for ADBMS.
- **Pure Code Centric**: Focused 100% on complete, verified, copy-paste ready code for every experiment.
- **Client-Side Syntax Highlighting**: Custom color-coding for Java, SQL, and MongoDB / JavaScript.
- **One-Click Actions**:
  - 📋 **Copy Code**: Copies clean source code to clipboard with visual feedback and toast notifications.
  - ⬇️ **Download File**: Direct download of individual `.java`, `.sql`, `.js` files.
  - 📦 **Export All**: Downloads a complete consolidated `.txt` bundle containing all 22 experiments.
  - ⛶ **Focus Mode**: Fullscreen distraction-free code reader modal.
- **Multi-File Code Switcher**: Seamlessly toggle between class files (e.g. `Employee.java` & `MainProgram.java`, or `DDL Schema` & `Joins`).
- **Terminal Execution & Output Drawer**: Realistic dark console showing exact compilation/run commands (`javac`, `java`, `mysql`, `mongosh`) and outputs matching the lab record.
- **Instant Search & Topic Filters**: Fast keyword filtering across titles, concepts, queries, and code text (keyboard shortcut `/`).
- **Font Size Customization**: Quick `A-` / `A+` controls for readability in lab displays.

---

## 📋 Experiments Index

### ☕ Java Programming (12 Practicals)
| No | Experiment Title | Key Concepts | Files |
|---|---|---|---|
| 01 | **Package Creation & Employee Management** | Packages, Encapsulation, Access Specifiers | `Employee.java`, `MainProgram.java` |
| 02 | **Polymorphism, Inheritance & Inner Classes** | Dynamic Method Dispatch, Overriding, Inner Classes | `Inheritance.java` |
| 03 | **Custom Shape Drawer with Menu Controls** | Swing GUI, JMenuBar, Graphics, ActionListeners | `CustomShapeFrame.java` |
| 04 | **Mouse Events Handling with MouseAdapter** | Event Delegation, MouseAdapter, Coordinates | `MouseAdapterDemo.java` |
| 05 | **Student Information File I/O System** | FileWriter, FileReader, BufferedReader, Serialization | `StudentInfoFile.java` |
| 06 | **Hierarchical Tree Viewer with JTree** | DefaultMutableTreeNode, JTree, JScrollPane | `TreeViewer.java` |
| 07 | **Bad Word Filter & Content Censorship** | HashSet O(1) Lookup, Regex Censorship, Streams | `BadWordFilter.java` |
| 08 | **Temperature Converter GUI Application** | GridLayout, Bidirectional Math, NumberFormatException | `TemperatureConverter.java` |
| 09 | **Student Details Registration Form** | Swing Form, ButtonGroup, RadioButtons, Dialogs | `StudentDetailsSwing.java` |
| 10 | **Image Viewer Bean Component** | JavaBeans Specification, ImageIO, paintComponent | `ImageViewerBean.java` |
| 11 | **2D Primitive Shapes Drawing with Graphics** | drawLine, drawRect, fillRect, drawOval, fillArc | `ShapeDrawing.java` |
| 12 | **2D Geometric Transformations** | Translation, Scaling, Rotation, AffineTransform | `TransformShapes.java` |

---

### 🗄️ ADBMS (SQL & NoSQL) (10 Practicals)
| No | System / Topic | Technology | Key Concepts | Files |
|---|---|---|---|---|
| 01 | **Banking System** | MySQL (RDBMS) | Primary Key, Unique Key, Constraint Violations, Foreign Key, INNER JOIN | `01_schema.sql`, `02_join.sql` |
| 02 | **Online Reservation System** | MySQL (RDBMS) | ENUM DataType & Violations, CHECK Integrity Constraint, Multi-table JOIN | `reservation_system.sql` |
| 03 | **Personal Information & Advanced Queries** | MySQL (RDBMS) | LIKE Pattern Matching, GROUP BY, Aggregate Functions, HAVING, LIMIT | `personal_and_emp_queries.sql` |
| 04 | **Student Mark Processing System** | MySQL (RDBMS) | Computed UPDATE Expressions, Case When, Logical Operators (AND, OR, NOT, <>) | `student_mark_processing.sql` |
| 05 | **E-Commerce Product Catalog System** | MongoDB (NoSQL) | Database & Collection Creation, Rich Document Schemas, mongosh & Compass | `ecommerce_catalog_setup.js` |
| 06 | **Basic CRUD Operations** | MongoDB (NoSQL) | insertOne, insertMany, find, $gt, $lt, updateOne, updateMany, replaceOne, delete | `crud_operations_collegeshop.js` |
| 07 | **Built-in & Aggregate Functions** | MongoDB (NoSQL) | Arithmetic Aggregation ($add, $divide), $match, $group, $count, $project rules | `mongodb_aggregate_pipeline.js` |
| 08 | **Sorting, Filtering & Indexing** | MongoDB (NoSQL) | sort(1 / -1), Single & Compound B-Tree Index, explain("executionStats") IXSCAN | `sorting_and_indexing.js` |
| 09 | **Create Collection & Query by Identity** | MongoDB (NoSQL) | Range Comparison, Grouping for Duplicate Names, Query by Email & ObjectId | `student_query_and_aggregation.js` |
| 10 | **Real-Time Stock Exchange Dataset Analysis** | MongoDB (NoSQL) | CSV Ingestion via Compass & CLI mongoimport, Negative Growth Analytics | `01_mongoimport.sh`, `02_queries.js` |
