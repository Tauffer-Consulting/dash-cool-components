from setuptools import setup
from codecs import open
import json
import os


# load package info from json
with open('package.json') as f:
    package = json.load(f)
package_name = package["name"].replace(" ", "_").replace("-", "_")

# Long description
here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'README.md')) as f:
    long_description = f.read()

setup(
    name=package_name,
    description=package["description"],
    long_description=long_description,
    long_description_content_type='text/markdown',
    version=package["version"],
    author=package['author'],
    url=package["homepage"],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    install_requires=['dash'],
    classifiers=[
        'Framework :: Dash',
    ],
)
