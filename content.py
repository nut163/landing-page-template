# content.py

```python
class Section:
    def __init__(self, name, content):
        self.name = name
        self.content = content

sections = [
    Section("home", "Welcome to our website!"),
    Section("artists", "Here are our featured artists."),
    Section("podcasts", "Check out our latest podcasts."),
    Section("music", "Explore our music collection."),
    Section("events", "Upcoming events are listed here."),
    Section("contact", "Get in touch with us.")
]
```