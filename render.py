from jinja2 import Environment, FileSystemLoader, select_autoescape
env = Environment(
    loader=FileSystemLoader('html'),
    autoescape=select_autoescape(['html', 'xml'])
)

with open('build/index.html', 'w') as file:
    file.write(env.get_template("index.jinja").render())