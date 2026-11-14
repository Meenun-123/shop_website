files = [
    'src/data/businessData.ts',
    'src/components/Hero.tsx',
    'src/components/BrandStory.tsx',
    'src/components/CTASection.tsx'
]

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    c = c.replace("'/images/", "'./images/").replace('"/images/', '"./images/')
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(c)
    print('Updated', f)
