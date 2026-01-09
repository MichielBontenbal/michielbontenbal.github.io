## Using uv's pyproject.toml

I recently started using `uv` for my Python projects, and I wanted to share my experience with setting up the `pyproject.toml` file. 

By using pyproject.toml you have a single virtual environment for each project, which makes managing dependencies much easier. 

This solves the problem that I encounter more an more: "Which virtual environment am I using for this project again?"

With the fast growing number of Python packages and tools, managing dependencies can become a nightmare. `uv` simplifies this by allowing you to define your project's dependencies in a single `pyproject.toml` file.

Here is a basic workflow from scratch.


### Step 1: Create a new directory for your project
```
mkdir my_project
cd my_project
```       

### Step 2: Initialize a new uv project
```uv init```

uv will create the following files:

```
├── .gitignore
├── .python-version
├── README.md
├── main.py
└── pyproject.toml
```

### Step 3: Clone the repository

```
git clone <your repo> 
cd <your repo>
```

### Step 4: create and activate the virtual environment
```
uv venv
uv .venv/bin/activate
```

### Step 5: Add requirements  
```uv add <package-name>```

or if you have a requirements.txt file:
```uv add -r requirements.txt```

### Step 6: Run your project

Run your python project the way you normally would;
```python3 main.py```