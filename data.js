/**
 * Complete Practical Codes from Lab Records
 */
const PRACTICALS_DATA = [
  {
    "id": "java-01",
    "subject": "java",
    "category": "Java Lab",
    "number": "01",
    "title": "PACKAGE EMPLOYEE",
    "description": "Program 1: PACKAGE EMPLOYEE from Java lab practical record.",
    "files": [
      {
        "name": "Employee.java",
        "lang": "java",
        "code": "package employee; \npublic class Employee { \n    private int empNo; \n    private double basicPay; \n    public Employee(int empNo) { \n        this.empNo = empNo; \n    } \n    public void setBasicPay(double pay) { \n        this.basicPay = pay; \n    } \n    public void display() { \n        System.out.println(\"Employee Number: \" + empNo); \n        System.out.println(\"Basic Pay: \" + basicPay); \n    } \n}"
      },
      {
        "name": "MainProgram.java",
        "lang": "java",
        "code": "package employee; \nimport employee.Employee; \npublic class MainProgram { \n    public static void main(String[] args) { \n        Employee emp1 = new Employee(101); \n        emp1.setBasicPay(50000); \n        emp1.setBasicPay(50000.75); \n        emp1.display(); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-02",
    "subject": "java",
    "category": "Java Lab",
    "number": "02",
    "title": "POLYMORPHISM, INHERITANCE AND INNER CLASSES",
    "description": "Program 2: POLYMORPHISM, INHERITANCE AND INNER CLASSES from Java lab practical record.",
    "files": [
      {
        "name": "Inheritance.java",
        "lang": "java",
        "code": "package inheritance; \n// Base class \nclass Animal {  \n    void sound() { \n        System.out.println(\"Animal is making sound\"); \n    } \n} \n// Subclass (Inheritance + Method Overriding) \nclass Dog extends Animal { \n    @Override \n    void sound() { \n        System.out.println(\"Dog is Barking\"); \n    } \n    // Inner class inside Dog \n    class Puppy { \n        void display() { \n            System.out.println(\"This is a Puppy, child of Dog.\"); \n        }       \n    } \n} \n// Main class \npublic class Inheritance { \n    public static void main(String[] args) { \n        // Polymorphism: Parent reference -> Child object \n        Animal myAnimal = new Dog(); \n        myAnimal.sound(); // Output: Dog is Barking \n        // Inheritance (Overriding method) \n        Dog myDog = new Dog(); \n        myDog.sound(); // Output: Dog is Barking \n \n        // Inner class usage \n        Dog.Puppy myPuppy = myDog.new Puppy(); \n        myPuppy.display(); // Output: This is a Puppy, child of Dog. \n    } \n}"
      }
    ]
  },
  {
    "id": "java-03",
    "subject": "java",
    "category": "Java Lab",
    "number": "03",
    "title": "CUSTOM SHAPES",
    "description": "Program 3: CUSTOM SHAPES from Java lab practical record.",
    "files": [
      {
        "name": "CustomShapeFrame.java",
        "lang": "java",
        "code": "package java_lab; \nimport javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*; \n \npublic class CustomShapeFrame extends JFrame implements ActionListener { \n    String selectedShape = \"None\"; \n    Color selectedColor = Color.BLACK; \n    public CustomShapeFrame(int width, int height, int x, int y) { \n        setTitle(\"Custom Shape Drawer\"); \n        setSize(width, height); \n        setLocation(x, y); \n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        // Create menu bar \n        JMenuBar menuBar = new JMenuBar(); \n        // Shape menu \n        JMenu shapeMenu = new JMenu(\"Shapes\"); \n        String[] shapes = {\"Line\", \"Rectangle\", \"Oval\"}; \n        for (String shape : shapes) { \n            JMenuItem item = new JMenuItem(shape); \n            item.addActionListener(this); \n            shapeMenu.add(item); \n        } \n        // Color menu \n        JMenu colorMenu = new JMenu(\"Colors\"); \n        JMenuItem red = new JMenuItem(\"Red\"); \n        JMenuItem blue = new JMenuItem(\"Blue\"); \n        JMenuItem green = new JMenuItem(\"Green\"); \n        red.addActionListener(this); \n        blue.addActionListener(this); \n        green.addActionListener(this); \n        colorMenu.add(red); \n        colorMenu.add(blue); \n        colorMenu.add(green); \n        menuBar.add(shapeMenu); \n        menuBar.add(colorMenu); \n        setJMenuBar(menuBar); \n    } \n    @Override \n    public void paint(Graphics g) { \n        super.paint(g); \n        g.setColor(selectedColor); \n        switch (selectedShape) { \n            case \"Line\": \n                g.drawLine(50, 100, 250, 100); \n                break; \n            case \"Rectangle\": \n                g.fillRect(50, 120, 200, 80); \n                break; \n            case \"Oval\": \n                g.fillOval(50, 120, 200, 80); \n                break; \n        } \n    } \n    @Override \n    public void actionPerformed(ActionEvent e) { \n        String cmd = e.getActionCommand(); \n        if (cmd.equals(\"Line\") || cmd.equals(\"Rectangle\") || cmd.equals(\"Oval\")) { \n            selectedShape = cmd; \n        } else if (cmd.equals(\"Red\")) { \n            selectedColor = Color.RED; \n        } else if (cmd.equals(\"Blue\")) { \n            selectedColor = Color.BLUE; \n        } else if (cmd.equals(\"Green\")) { \n            selectedColor = Color.GREEN; \n        } \n        repaint(); \n    } \n    public static void main(String[] args) { \n        CustomShapeFrame frame = new CustomShapeFrame(500, 400, 200, 200); \n        frame.setVisible(true); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-04",
    "subject": "java",
    "category": "Java Lab",
    "number": "04",
    "title": "MOUSE EVENT",
    "description": "Program 4: MOUSE EVENT from Java lab practical record.",
    "files": [
      {
        "name": "MouseAdapterDemo.java",
        "lang": "java",
        "code": "package java_lab; \nimport javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*; \n \npublic class MouseAdapterDemo extends JFrame { \n    JLabel label; \n    public MouseAdapterDemo() { \n        setTitle(\"MouseAdapter Demo\"); \n        setSize(400, 400); \n        setLayout(null); \n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        label = new JLabel(\"Move or click the mouse\"); \n        label.setBounds(100, 100, 250, 30); \n        add(label); \n        addMouseListener(new MouseAdapter() { \n            public void mouseClicked(MouseEvent e) { \n                label.setText(\"Mouse Clicked at (\" + e.getX() + \", \" + e.getY() + \")\"); \n            } \n            public void mousePressed(MouseEvent e) { \n                label.setText(\"Mouse Pressed\"); \n            } \n            public void mouseReleased(MouseEvent e) { \n                label.setText(\"Mouse Released\"); \n            } \n            public void mouseEntered(MouseEvent e) { \n                label.setText(\"Mouse Entered the Frame\"); \n            } \n            public void mouseExited(MouseEvent e) { \n                label.setText(\"Mouse Exited the Frame\"); \n            } \n        }); \n    } \n \n    public static void main(String[] args) { \n        MouseAdapterDemo frame = new MouseAdapterDemo(); \n        frame.setVisible(true); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-05",
    "subject": "java",
    "category": "Java Lab",
    "number": "05",
    "title": "STUDENT INFO",
    "description": "Program 5: STUDENT INFO from Java lab practical record.",
    "files": [
      {
        "name": "StudentInfoFile.java",
        "lang": "java",
        "code": "package java_lab; \nimport java.io.*; \nimport java.util.Scanner; \n \npublic class StudentInfoFile { \n    public static void main(String[] args) { \n        Scanner sc = new Scanner(System.in); \n        String fileName = \"students.txt\"; \n        try { \n            // Writing student info \n            FileWriter fw = new FileWriter(fileName, true); \n            BufferedWriter bw = new BufferedWriter(fw); \n            System.out.print(\"Enter number of students: \"); \n            int n = sc.nextInt(); \n            sc.nextLine(); // consume newline \n            for (int i = 0; i < n; i++) { \n                System.out.println(\"Enter details for Student \" + (i + 1)); \n                System.out.print(\"Name: \"); \n                String name = sc.nextLine(); \n                System.out.print(\"Roll Number: \"); \n                String roll = sc.nextLine(); \n                System.out.print(\"Department: \"); \n                String dept = sc.nextLine(); \n                System.out.print(\"Marks: \"); \n                int marks = sc.nextInt(); \n                sc.nextLine(); // consume newline \n                bw.write(name + \",\" + roll + \",\" + dept + \",\" + marks); \n                bw.newLine(); \n            } \n            bw.close(); \n            fw.close(); \n            System.out.println(\"\\nStudent details written to file successfully.\"); \n            // Reading student info \n            System.out.println(\"\\nReading student details from file:\"); \n            BufferedReader br = new BufferedReader(new FileReader(fileName)); \n            String line; \n            while ((line = br.readLine()) != null) { \n                String[] parts = line.split(\",\"); \n                System.out.println(\"Name: \" + parts[0] + \", Roll No: \" + parts[1] + \", Dept: \" + parts[2] + \", \nMarks: \" + parts[3]); \n            } \n            br.close(); \n        } catch (IOException e) { \n            System.out.println(\"Error: \" + e.getMessage()); \n        } \n    } \n}"
      }
    ]
  },
  {
    "id": "java-06",
    "subject": "java",
    "category": "Java Lab",
    "number": "06",
    "title": "TREE VIEWER",
    "description": "Program 6: TREE VIEWER from Java lab practical record.",
    "files": [
      {
        "name": "TreeViewer.java",
        "lang": "java",
        "code": "package java_lab; \n \nimport javax.swing.*; \nimport javax.swing.tree.DefaultMutableTreeNode; \nimport java.awt.*; \npublic class TreeViewer { \n    public static void main(String[] args) { \n        // Create a JFrame \n        JFrame frame = new JFrame(\"Tree Viewer Example\"); \n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        frame.setSize(400, 300); \n \n        // Create the root node \n        DefaultMutableTreeNode root = new DefaultMutableTreeNode(\"Root\"); \n \n        // Create child nodes \n        DefaultMutableTreeNode branch1 = new DefaultMutableTreeNode(\"Branch 1\"); \n        DefaultMutableTreeNode branch2 = new DefaultMutableTreeNode(\"Branch 2\"); \n \n        // Add leaf nodes to branches \n        branch1.add(new DefaultMutableTreeNode(\"Leaf 1.1\")); \n        branch1.add(new DefaultMutableTreeNode(\"Leaf 1.2\")); \n \n        branch2.add(new DefaultMutableTreeNode(\"Leaf 2.1\")); \n        branch2.add(new DefaultMutableTreeNode(\"Leaf 2.2\")); \n \n        // Add branches to root \n        root.add(branch1); \n        root.add(branch2); \n \n        // Create the JTree using the root node \n        JTree tree = new JTree(root); \n        // Put the tree in a scroll pane \n        JScrollPane scrollPane = new JScrollPane(tree); \n        // Add the scroll pane to the frame \n        frame.add(scrollPane, BorderLayout.CENTER); \n        // Make the frame visible \n        frame.setVisible(true); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-07",
    "subject": "java",
    "category": "Java Lab",
    "number": "07",
    "title": "BADWORDS",
    "description": "Program 7: BADWORDS from Java lab practical record.",
    "files": [
      {
        "name": "BadWordFilter.java",
        "lang": "java",
        "code": "package java_lab; \nimport java.io.*; \nimport java.util.*; \n \npublic class BadWordFilter { \n    private static final Set<String> BAD_WORDS = new HashSet<>(Arrays.asList( \n        \"badword1\", \"badword2\", \"hate\", \"violence\" \n    )); \n \n    public static void main(String[] args) { \n        String filePath = \"C:\\\\Users\\\\asus\\\\Documents\\\\sample.txt\"; // Change path as needed \n \n        try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) { \n            String line; \n            boolean hasBadWords = false; \n \n            while ((line = reader.readLine()) != null) { \n                for (String word : BAD_WORDS) { \n                    if (line.toLowerCase().contains(word.toLowerCase())) { \n                        hasBadWords = true; \n                        break; \n                    } \n                } \n                if (hasBadWords) break; \n            } \n \n            if (hasBadWords) { \n                System.out.println(\"Access Denied: File contains prohibited words.\"); \n            } else { \n                try (BufferedReader displayReader = new BufferedReader(new FileReader(filePath))) { \n                    System.out.println(\"File Contents:\"); \n                    while ((line = displayReader.readLine()) != null) { \n                        System.out.println(line); \n                    } \n                } \n            } \n \n        } catch (FileNotFoundException e) { \n            System.out.println(\"File not found: \" + filePath); \n        } catch (IOException e) { \n            System.out.println(\"Error reading file: \" + e.getMessage()); \n        } \n    } \n}"
      }
    ]
  },
  {
    "id": "java-08",
    "subject": "java",
    "category": "Java Lab",
    "number": "08",
    "title": "TEMPERATURE_CONVERTER",
    "description": "Program 8: TEMPERATURE_CONVERTER from Java lab practical record.",
    "files": [
      {
        "name": "TemperatureConverter.java",
        "lang": "java",
        "code": "package java_lab; \n \nimport javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*; \n \npublic class TemperatureConverter extends JFrame implements ActionListener { \n    private JTextField celsiusField, fahrenheitField; \n    private JButton convertToF, convertToC, clearButton; \n \n    public TemperatureConverter() { \n        setTitle(\"Temperature Converter\"); \n        setSize(350, 200); \n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        setLayout(new GridLayout(4, 2, 10, 10)); \n \n        JLabel celsiusLabel = new JLabel(\"Celsius:\"); \n        JLabel fahrenheitLabel = new JLabel(\"Fahrenheit:\"); \n \n        celsiusField = new JTextField(); \n        fahrenheitField = new JTextField(); \n \n        convertToF = new JButton(\"Convert to Fahrenheit\"); \n        convertToC = new JButton(\"Convert to Celsius\"); \n        clearButton = new JButton(\"Clear\"); \n \n        convertToF.addActionListener(this); \n        convertToC.addActionListener(this); \n        clearButton.addActionListener(this); \n \n        add(celsiusLabel); \n        add(celsiusField); \n        add(fahrenheitLabel); \n        add(fahrenheitField); \n        add(convertToF); \n        add(convertToC); \n        add(clearButton); \n \n        setVisible(true); \n    } \n \n    public void actionPerformed(ActionEvent e) { \n        try { \n            if (e.getSource() == convertToF) { \n                String celsiusText = celsiusField.getText(); \n                if (!celsiusText.isEmpty()) { \n                    double celsius = Double.parseDouble(celsiusText); \n                    double fahrenheit = (celsius * 9 / 5) + 32; \n                    fahrenheitField.setText(String.format(\"%.2f\", fahrenheit)); \n                } \n            } else if (e.getSource() == convertToC) { \n                String fahrenheitText = fahrenheitField.getText(); \n                if (!fahrenheitText.isEmpty()) { \n                    double fahrenheit = Double.parseDouble(fahrenheitText); \n                    double celsius = (fahrenheit - 32) * 5 / 9; \n                    celsiusField.setText(String.format(\"%.2f\", celsius)); \n                } \n            } else if (e.getSource() == clearButton) { \n                celsiusField.setText(\"\"); \n                fahrenheitField.setText(\"\"); \n            } \n             } catch (NumberFormatException ex) { \n            JOptionPane.showMessageDialog(this, \"Please enter a valid number.\", \"Error\", \nJOptionPane.ERROR_MESSAGE); \n        } \n    } \n \n    public static void main(String[] args) { \n        SwingUtilities.invokeLater(() -> new TemperatureConverter()); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-09",
    "subject": "java",
    "category": "Java Lab",
    "number": "09",
    "title": "STUDENT_FX",
    "description": "Program 9: STUDENT_FX from Java lab practical record.",
    "files": [
      {
        "name": "StudentDetailsSwing.java",
        "lang": "java",
        "code": "package java_lab; \n \nimport javax.swing.*; \nimport java.awt.*; \n \npublic class StudentDetailsSwing extends JFrame { \n \n    public StudentDetailsSwing() { \n        setTitle(\"Student Details\"); \n        setSize(400, 300); \n        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        setLayout(new GridLayout(6, 2, 10, 10)); \n \n        JLabel nameLabel = new JLabel(\"Name:\"); \n        JTextField nameField = new JTextField(); \n \n        JLabel regLabel = new JLabel(\"Register No:\"); \n        JTextField regField = new JTextField(); \n \n        JLabel deptLabel = new JLabel(\"Department:\"); \n        JTextField deptField = new JTextField(); \n \n        JLabel emailLabel = new JLabel(\"Email:\"); \n        JTextField emailField = new JTextField(); \n        JButton submitBtn = new JButton(\"Submit\"); \n        JButton clearBtn = new JButton(\"Clear\"); \n        add(nameLabel); add(nameField); \n        add(regLabel); add(regField); \n        add(deptLabel); add(deptField); \n        add(emailLabel); add(emailField); \n        add(submitBtn); add(clearBtn); \n        // Action for Submit \n        submitBtn.addActionListener(e -> { \n            String name = nameField.getText(); \n            String reg = regField.getText(); \n            String dept = deptField.getText(); \n            String email = emailField.getText(); \n            if (name.isEmpty() || reg.isEmpty() || dept.isEmpty() || email.isEmpty()) { \n                JOptionPane.showMessageDialog(this, \"Please fill all fields.\"); \n            } else { \n                String info = \"Name: \" + name + \"\\nRegister No: \" + reg + \n                              \"\\nDepartment: \" + dept + \"\\nEmail: \" + email; \n                JOptionPane.showMessageDialog(this, info, \"Student Details\", \nJOptionPane.INFORMATION_MESSAGE); \n            } \n        }); \n        // Action for Clear \n        clearBtn.addActionListener(e -> { \n            nameField.setText(\"\"); \n            regField.setText(\"\"); \n            deptField.setText(\"\"); \n            emailField.setText(\"\"); \n        }); \n        setVisible(true); \n    } \n \n    public static void main(String[] args) { \n        SwingUtilities.invokeLater(StudentDetailsSwing::new); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-10",
    "subject": "java",
    "category": "Java Lab",
    "number": "10",
    "title": "IMAGE_VIEWER",
    "description": "Program 10: IMAGE_VIEWER from Java lab practical record.",
    "files": [
      {
        "name": "ImageViewerBean.java",
        "lang": "java",
        "code": "package image; \n \nimport javax.swing.*; \nimport java.awt.*; \nimport java.io.File; \nimport javax.imageio.ImageIO; \nimport java.awt.image.BufferedImage; \nimport java.beans.*; \n \npublic class ImageViewerBean extends JPanel implements java.io.Serializable { \n    private BufferedImage image; \n \n    public ImageViewerBean() { \n        // Default constructor \n    } \n \n    public void setImagePath(String path) { \n        try { \n            image = ImageIO.read(new File(path)); \n            repaint(); \n        } catch (Exception e) { \n            System.out.println(\"Image loading failed: \" + e.getMessage()); \n        } \n    } \n \n    public String getImagePath() { \n        return \"\"; \n    } \n \n    protected void paintComponent(Graphics g) { \n        super.paintComponent(g); \n        if (image != null) { \n            int x = (getWidth() - image.getWidth()) / 2; \n            int y = (getHeight() - image.getHeight()) / 2; \n            g.drawImage(image, x, y, this); \n        } \n    } \n} \npackage image; \n \nimport javax.swing.*; \n \npublic class ImageViewertest { \n    public static void main(String[] args) { \n        JFrame frame = new JFrame(\"Java Bean Image Viewer\"); \n        ImageViewerBean viewer = new ImageViewerBean(); \n         \n        viewer.setImagePath(\"C:/Users/Admin/image1.png\"); //     Change to your image path \n \n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        frame.setSize(600, 400); \n        frame.add(viewer); \n        frame.setVisible(true); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-11",
    "subject": "java",
    "category": "Java Lab",
    "number": "11",
    "title": "2D_SHAPES",
    "description": "Program 11: 2D_SHAPES from Java lab practical record.",
    "files": [
      {
        "name": "ShapeDrawing.java",
        "lang": "java",
        "code": "package java_lab; \n \nimport javax.swing.JFrame; \nimport javax.swing.JPanel; \nimport java.awt.Graphics; \n \npublic class ShapeDrawing extends JPanel { \n \n    public void paintComponent(Graphics g) { \n        super.paintComponent(g); \n \n        // Draw a line \n        g.drawLine(20, 30, 200, 30); \n \n        // Draw a rectangle \n        g.drawRect(20, 50, 100, 60); \n \n        // Draw an oval \n        g.drawOval(150, 50, 100, 60); \n    } \n \n    public static void main(String[] args) { \n        JFrame frame = new JFrame(\"Drawing Basic Shapes\"); \n        ShapeDrawing panel = new ShapeDrawing(); \n        frame.setSize(300, 200); \n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n        frame.add(panel); \n        frame.setVisible(true); \n    } \n}"
      }
    ]
  },
  {
    "id": "java-12",
    "subject": "java",
    "category": "Java Lab",
    "number": "12",
    "title": "TRANSFORMATIONS",
    "description": "Program 12: TRANSFORMATIONS from Java lab practical record.",
    "files": [
      {
        "name": "TransformShapes.java",
        "lang": "java",
        "code": "package java_lab; \n \nimport javax.swing.*; \nimport java.awt.*; \nimport java.awt.event.*; \n \npublic class TransformShapes extends JPanel implements ActionListener { \n    private int choice = 0;  // 1=translate, 2=scale, 3=rotate \n \n    public TransformShapes() { \n        JFrame frame = new JFrame(\"2D Transformations - Line & Rectangle\"); \n        frame.setSize(500, 400); \n        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); \n \n        // Buttons for transformations \n        JButton translateBtn = new JButton(\"Translate\"); \n        JButton scaleBtn = new JButton(\"Scale\"); \n        JButton rotateBtn = new JButton(\"Rotate\"); \n \n        translateBtn.addActionListener(this); \n        scaleBtn.addActionListener(this); \n        rotateBtn.addActionListener(this); \n \n        JPanel buttonPanel = new JPanel(); \n        buttonPanel.add(translateBtn); \n        buttonPanel.add(scaleBtn); \n        buttonPanel.add(rotateBtn); \n \n        frame.add(this, BorderLayout.CENTER); \n        frame.add(buttonPanel, BorderLayout.SOUTH); \n \n        frame.setVisible(true); \n    } \n \n    @Override \n    public void paintComponent(Graphics g) { \n        super.paintComponent(g); \n        Graphics2D g2 = (Graphics2D) g; \n \n        // Original shape \n        g2.setColor(Color.BLUE); \n        g2.drawRect(100, 100, 100, 50); // rectangle \n        g2.drawLine(100, 200, 200, 250); // line \n        g2.drawString(\"Original\", 90, 90); \n \n        // Apply transformations \n        g2.setColor(Color.RED); \n        switch (choice) { \n            case 1: // Translation \n                g2.translate(100, 50); \n                g2.drawRect(100, 100, 100, 50); \n                g2.drawLine(100, 200, 200, 250); \n                g2.drawString(\"Translated\", 90, 90); \n                break; \n \n            case 2: // Scaling \n                g2.translate(100, 50); \n                g2.scale(1.5, 1.5); \n                g2.drawRect(100, 100, 100, 50); \n                g2.drawLine(100, 200, 200, 250); \n                g2.drawString(\"Scaled\", 90, 90); \n                break; \n \n            case 3: // Rotation \n                g2.translate(250, 150); \n                g2.rotate(Math.toRadians(45)); \n                g2.drawRect(0, 0, 100, 50); \n                g2.drawLine(0, 100, 100, 150); \n                g2.drawString(\"Rotated\", 10, -10); \n                break; \n        } \n    } \n \n    @Override \n    public void actionPerformed(ActionEvent e) { \n        String cmd = e.getActionCommand(); \n        if (cmd.equals(\"Translate\")) choice = 1; \n        else if (cmd.equals(\"Scale\")) choice = 2; \n        else if (cmd.equals(\"Rotate\")) choice = 3; \n        repaint(); \n    } \n \n    public static void main(String[] args) { \n        SwingUtilities.invokeLater(TransformShapes::new); \n    } \n}"
      }
    ]
  },
  {
    "id": "adbms-01",
    "subject": "adbms",
    "category": "MySQL",
    "number": "01",
    "title": "BANKING SYSTEM",
    "description": "Program 1: Banking system - Primary Key, Unique Key creation, Unique key constraint violation, NULL value in Unique key, Foreign Key creation, Joining function.",
    "files": [
      {
        "name": "banking_system.sql",
        "lang": "sql",
        "code": "-- Primary Key, Unique Key creation\ncreate table bank(accno int primary key, cust_name varchar(15), email varchar(25) unique, phonenumber varchar(15) unique);\ndesc bank;\n\ninsert into bank values(17071, 'velan', 'velan@gmail.com', '9788934500');\ninsert into bank values(17072, 'anu', 'anupriya@gmail.com', '6734517000');\ninsert into bank values(17073, 'shanthi', 'santhi21@gmail.com', '7890012345');\n\n-- Unique key constraint Violation\ninsert into bank values(17074, 'arun', 'anupriya@gmail.com', '9894238341');\n-- ERROR 1062 (23000): Duplicate entry 'anupriya@gmail.com' for key 'bank.email'\n\n-- Inserting NULL value in Unique key field\ninsert into bank values(17074, 'arun', NULL, '9894238341');\ninsert into bank values(17075, 'padma', 'padma@gmail.com', null);\ninsert into bank values(17076, 'preethi', null, null);\n\nselect * from bank;\n\n-- Foreign Key creation\ncreate table loandetails(loanid int primary key, accno int, loanamt int, foreign key (accno) references bank(accno));\ndesc loandetails;\n\ninsert into loandetails values(101, 17071, 50000);\ninsert into loandetails values(102, 17072, 75000);\ninsert into loandetails values(103, 17073, 100000);\n\n-- Combining two table data using Joining function\nselect b.accno, b.cust_name, l.loanid, l.loanamt from bank b inner join loandetails as l on b.accno=l.accno;"
      }
    ]
  },
  {
    "id": "adbms-02",
    "subject": "adbms",
    "category": "MySQL",
    "number": "02",
    "title": "ONLINE RESERVATION SYSTEM",
    "description": "Program 2: Online Reservation System - Table creation, ENUM data type, CHECK integrity constraint, and Foreign Key constraints.",
    "files": [
      {
        "name": "reservation_system.sql",
        "lang": "sql",
        "code": "-- Table 1: Customer\ncreate table customer(c_id int primary key, c_name varchar(10), email varchar(25), phonenumber varchar(10));\ndesc customer;\n\ninsert into customer values(1071, 'sethu', 'sethu@gmail.com', '7634529800');\ninsert into customer values(1072, 'ram', 'ramesh@gmail.com', '9842109876');\ninsert into customer values(1073, 'priya', 'priya@gmail.com', '8901234567');\nselect * from customer;\n\n-- Table 2: Vehicle\ncreate table vehicle(vid int primary key, v_type enum('car', 'bus', 'bike', 'van'), v_name varchar(15), fare int);\ndesc vehicle;\n\ninsert into vehicle values(1001, 'car', 'swift', 15);\ninsert into vehicle values(1002, 'bus', 'volvo', 30);\ninsert into vehicle values(1003, 'van', 'omni', 20);\n\n-- Value Insertion and enum data type setting data violation\n-- insert into vehicle values(1004, 'auto', 'bajaj', 10);\n-- ERROR 1265 (01000): Data truncated for column 'v_type' at row 1\n\nselect * from vehicle;\n\n-- Table 3: reserve with check integrity\ncreate table reserve(r_id int primary key, c_id int, vid int, start_datetime datetime check(start_datetime >= '2025-10-25'), end_datetime datetime, place varchar(15), foreign key(c_id) references customer(c_id), foreign key(vid) references vehicle(vid));\ndesc reserve;\n\n-- Check constraint violation test\n-- insert into reserve values(1, 1071, 1001, '2025-10-20 10:00:00', '2025-10-22 10:00:00', 'salem');\n-- ERROR 3819 (HY000): Check constraint 'reserve_chk_1' is violated.\n\ninsert into reserve values(1, 1071, 1001, '2025-10-26 10:00:00', '2025-10-27 18:00:00', 'salem');\ninsert into reserve values(2, 1072, 1002, '2025-10-28 06:00:00', '2025-10-29 20:00:00', 'chennai');\nselect * from reserve;"
      }
    ]
  },
  {
    "id": "adbms-03",
    "subject": "adbms",
    "category": "MySQL",
    "number": "03",
    "title": "PERSONAL INFORMATION",
    "description": "Program 3: Personal Information - LIKE Operator, Group By with Aggregate functions, Order by and Limit, Having Clause.",
    "files": [
      {
        "name": "personal_information.sql",
        "lang": "sql",
        "code": "create table personal_data(name varchar(20), email varchar(30), university varchar(25));\ninsert into personal_data values('sumathi', 'sumathi15@gmail.com', 'bharathiyar'), ('ravi', 'ravi23@gmail.com', 'bharathidasan'), ('keerthi', 'keerthi@gmail.com', 'bharathiar');\n\n-- Using LIKE Operator\nselect * from personal_data where name like 's%';\nselect * from personal_data where name like '%i';\nselect * from personal_data where name like '%thi%';\n\n-- EMP Table for Group by with Aggregate functions\ncreate table emp(empid int, empname varchar(20), dept varchar(15), salary int);\ninsert into emp values(1, 'arun', 'sales', 20000), (2, 'kumar', 'sales', 25000), (3, 'anitha', 'marketing', 30000), (4, 'banu', 'marketing', 35000), (5, 'chandran', 'admin', 22000);\n\n-- Group by with Aggregate functions\nselect dept, count(*), sum(salary), avg(salary), max(salary), min(salary) from emp group by dept;\n\n-- Order by and Limit\nselect * from emp order by salary desc;\nselect * from emp order by salary desc limit 2;\n\n-- Having Clause in EMP Table\nselect dept, sum(salary) from emp group by dept having sum(salary) > 50000;"
      }
    ]
  },
  {
    "id": "adbms-04",
    "subject": "adbms",
    "category": "MySQL",
    "number": "04",
    "title": "STUDENT MARK PROCESSING SYSTEM",
    "description": "Program 4: Student mark processing system - Table creation, Insert Values, Update total, percentage, Logical Operator using Where Clause.",
    "files": [
      {
        "name": "student_mark_processing.sql",
        "lang": "sql",
        "code": "-- Table creation\ncreate table studentdata(rollno varchar(10) primary key, studentname varchar(20), adbms int, cn int, os int, total int, percentage float, result varchar(10));\ndesc studentdata;\n\n-- Insert Values to Table\ninsert into studentdata(rollno, studentname, adbms, cn, os) values('25mca01', 'arun', 85, 78, 92);\ninsert into studentdata(rollno, studentname, adbms, cn, os) values('25mca02', 'chitra', 65, 57, 72);\ninsert into studentdata(rollno, studentname, adbms, cn, os) values('25mca03', 'deepak', 90, 88, 95);\ninsert into studentdata(rollno, studentname, adbms, cn, os) values('25mca04', 'gokul', 42, 38, 50);\n\n-- Update total, percentage column\nupdate studentdata set total = adbms + cn + os;\nupdate studentdata set percentage = total / 3;\nupdate studentdata set result = 'pass' where adbms >= 50 and cn >= 50 and os >= 50;\nupdate studentdata set result = 'fail' where adbms < 50 or cn < 50 or os < 50;\n\nselect * from studentdata;\n\n-- Logical Operator using Where Clause\nselect rollno, studentname from studentdata where total <> 302;\nselect rollno, studentname, total from studentdata where total = 255;\nselect rollno, studentname from studentdata where adbms >= 80 and os >= 80;\nselect rollno, studentname from studentdata where adbms < 50 or cn < 50;"
      }
    ]
  },
  {
    "id": "adbms-05",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "05",
    "title": "E-COMMERCE PRODUCT CATALOG SYSTEM",
    "description": "Program 5: Design an E-Commerce product catalog system using MongoDB as a storage engine and insert values.",
    "files": [
      {
        "name": "ecommerce_catalog.js",
        "lang": "javascript",
        "code": "// Step 1: Open mongoshell:\n// Step 2: show databases; and shift to newly created database named as e_commerce by using query use e_commerce.\nshow databases;\nuse e_commerce;\n\n// Step 3: Insert values to the new collection name as product and view the created collections\ndb.product.insertOne({\n    name: \"Mouse\",\n    category: \"Electronics\",\n    price: 25,\n    stock: 50\n});\n\ndb.product.insertMany([\n    { name: \"Keyboard\", category: \"Electronics\", price: 75, stock: 150 },\n    { name: \"USB Cable\", category: \"Accessories\", price: 10, stock: 200 }\n]);\n\n// Step 4: View the data in Table view / Collections\nshow collections;\n\n// Step 5: View data in mongoshell\ndb.product.find().pretty();"
      }
    ]
  },
  {
    "id": "adbms-06",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "06",
    "title": "CURD OPERATIONS",
    "description": "Program 6: Perform basic CURD operations (Create, Update, Read and Delete) functions for the product catalog.",
    "files": [
      {
        "name": "crud_operations.js",
        "lang": "javascript",
        "code": "// Step 1: Create collection collegeshop in database e_shopping\nuse e_shopping;\ndb.createCollection(\"collegeshop\");\n\n// Step 2: Insert one document in collegeshop\ndb.collegeshop.insertOne({ item: \"notebook\", qty: 50 });\n\n// Step 3: Insert multiple documents\ndb.collegeshop.insertMany([\n    { item: \"ballpointpen\", qty: 120 },\n    { item: \"inkpen\", qty: 60 }\n]);\n\n// Step 4: Read documents from collection using findOne()\ndb.collegeshop.findOne({ item: \"ballpointpen\" });\n\n// Find documents where qty is greater than 30 and less than 100\ndb.collegeshop.find({ qty: { $gt: 30, $lt: 100 } });\ndb.collegeshop.find({ qty: { $gte: 60 } });\n\n// Step 5: To Update one document from the collection collegeshop\ndb.collegeshop.updateOne(\n    { item: \"notebook\" },\n    { $set: { status: \"available\" } }\n);\n\n// Update many documents\ndb.collegeshop.updateMany(\n    { category: \"writingstuff\" },\n    { $set: { status: \"available\" } }\n);\n\n// View updated data\ndb.collegeshop.find();\n\n// Step 7: replaceOne document with a new one\ndb.collegeshop.replaceOne(\n    { item: \"inkpen\" },\n    { item: \"blueinkpen\", qty: 70, category: \"writingstuff\", status: \"available\" }\n);\n\n// Deleting a Single Document:\ndb.collegeshop.deleteOne({ item: \"notebook\" });\n\n// Deleting Many Documents:\ndb.collegeshop.deleteMany({ status: \"available\" });\n\n// View final documents\ndb.collegeshop.find();"
      }
    ]
  },
  {
    "id": "adbms-07",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "07",
    "title": "BUILT-IN FUNCTIONS",
    "description": "Program 7: Built-in function in MongoDB - $add, $multiply, $divide, $match, $group, $count, $project.",
    "files": [
      {
        "name": "builtin_functions.js",
        "lang": "javascript",
        "code": "use e_shopping;\n\n// Step 1: Insert student marks data\ndb.s_mark.insertOne({ _id: 1, sname: \"Arun\", java: 76, cn: 73, os: 98 });\ndb.s_mark.insertMany([\n    { _id: 2, sname: \"banu\", java: 67, cn: 56, os: 76 },\n    { _id: 3, sname: \"chitra\", java: 89, cn: 67, os: 54 }\n]);\n\n// Step 3: Aggregate function $add $multiply $divide\ndb.s_mark.aggregate([\n    {\n        $project: {\n            sname: 1,\n            totalmark: { $add: [\"$java\", \"$cn\", \"$os\"] }\n        }\n    }\n]);\n\n// Step 4: Update document with field edu_status\ndb.s_mark.updateOne({ _id: 1 }, { $set: { edu_status: \"regular\" } });\ndb.s_mark.updateOne({ _id: 2 }, { $set: { edu_status: \"intern\" } });\ndb.s_mark.updateOne({ _id: 3 }, { $set: { edu_status: \"intern\" } });\ndb.s_mark.find();\n\n// Step 6: Aggregate function $match - Filters documents based on specified condition\ndb.s_mark.aggregate([\n    { $match: { edu_status: \"intern\" } }\n]);\n\n// Step 8: Without aggregate function document filtered using find()\ndb.s_mark.find({ edu_status: \"intern\" });\n\n// Step 9: Aggregate function $group\ndb.s_mark.aggregate([\n    {\n        $group: {\n            _id: \"$edu_status\",\n            total: { $sum: 1 }\n        }\n    }\n]);\n\n// Step 10: $count\ndb.s_mark.aggregate([\n    { $match: { edu_status: \"intern\" } },\n    { $count: \"intern_count\" }\n]);\n\n// Step 11: Including and Excluding fields using $project and $limit\ndb.s_mark.aggregate([\n    {\n        $project: {\n            _id: 0,\n            sname: 1,\n            java: 1\n        }\n    },\n    { $limit: 2 }\n]);"
      }
    ]
  },
  {
    "id": "adbms-08",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "08",
    "title": "SORTING, INDEXING & FILTERING",
    "description": "Program 8: Sorting, filtering and Index in MongoDB.",
    "files": [
      {
        "name": "sorting_indexing.js",
        "lang": "javascript",
        "code": "use e_commerce;\n\n// Step 1: Filter documents\ndb.product.find({ category: \"Electronics\", price: { $lt: 100 } });\n\n// Step 2: Sort by price ascending (1)\ndb.product.find().sort({ price: 1 });\n\n// Step 3: Sort by price descending (-1)\ndb.product.find().sort({ price: -1 });\n\n// Step 5: Filter and sort the document based on category, price and name\ndb.product.find({ category: \"Electronics\" }).sort({ price: 1, name: -1 });\n\n// Creating Index\ndb.product.createIndex({ category: 1 });\n\n// Compound Index\ndb.product.createIndex({ category: 1, price: -1 });\n\n// View Indexes\ndb.product.getIndexes();"
      }
    ]
  },
  {
    "id": "adbms-09",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "09",
    "title": "CREATE A COLLECTION & FIND DOCUMENT",
    "description": "Program 9: Create a Collection & Find Document - filtering by condition, finding duplicates by firstname, finding by email and id.",
    "files": [
      {
        "name": "collection_find.js",
        "lang": "javascript",
        "code": "use college;\n\n// Insert student documents\ndb.student.insertMany([\n    { firstname: \"adhi\", lastname: \"ravi\", age: 16, email: \"adhiravi@gmail.com\" },\n    { firstname: \"balu\", lastname: \"velu\", age: 15, email: \"baluv@gmail.com\" },\n    { firstname: \"adhi\", lastname: \"kumar\", age: 18, email: \"adhikumar@gmail.com\" }\n]);\n\n// Find documents where age > 12\ndb.student.find({ age: { $gt: 12 } });\n\n// Find a list of all users with the same firstname using aggregate $group\ndb.student.aggregate([\n    {\n        $group: {\n            _id: \"$firstname\",\n            count: { $sum: 1 }\n        }\n    },\n    {\n        $match: {\n            count: { $gt: 1 }\n        }\n    }\n]);\n\n// Find a user by email\ndb.student.findOne({ email: \"adhiravi@gmail.com\" });\n\n// Find a document by id\ndb.student.findOne({ firstname: \"balu\" });"
      }
    ]
  },
  {
    "id": "adbms-10",
    "subject": "adbms",
    "category": "MongoDB",
    "number": "10",
    "title": "STOCK EXCHANGE",
    "description": "Program 10: Use real time data set of Stock exchange by importing CSV and query data.",
    "files": [
      {
        "name": "stock_exchange.js",
        "lang": "javascript",
        "code": "// Command line Import method:\n// mongoimport --db sample --collection stock --type csv --headerline --file stocks.csv\n\nuse sample;\n\n// View imported data\ndb.stock.find().limit(5);\n\n// Step 6: Find all the stocks with negative growth\ndb.stock.find({ growth: { $lt: 0 } });\n\n// Find stocks with positive growth sorted descending\ndb.stock.find({ growth: { $gt: 0 } }).sort({ growth: -1 });"
      }
    ]
  }
];
