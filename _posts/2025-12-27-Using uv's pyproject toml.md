## Using uv's pyproject.toml

I recently started using `uv` for my Python projects, and I wanted to share my experience with setting up the `pyproject.toml` file. 

pyproject.toml is a neat way to have a single repository in a single virtual environment. 

By following this you can create your   (.venv). 

Here is a basic workflow from scratch: from initiating a new project to cloning a repo into it and adding the requirements. 


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