import json

with open('src/galleryData.json', 'r', encoding='utf-8') as f:
    images = json.load(f)

upvc_sliding = {2, 3, 5, 6, 10, 11, 14, 17, 20, 61, 65, 66, 68, 69, 70, 71, 72, 76, 79, 127, 140, 141, 142, 143, 144, 145, 146, 149}
upvc_casement = {1, 4, 12, 15, 63, 64, 73, 75, 77, 78, 81, 147, 148}
upvc_fixed_vent = {13, 16, 67, 74, 128, 139}

wpc_frames = {59, 62}
wpc_boards = {30, 108, 109, 110, 111}
wpc_doors = {21, 22, 23, 24, 25, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 113}

panels_interiors = {18, 19, 26, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 112}
hardware_oben = {7, 8, 9}
mesh_grills = {114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138}

counters = {}
def next_num(key):
    counters[key] = counters.get(key, 0) + 1
    return f"{counters[key]:02d}"

for item in images:
    pid = item['id']
    if pid in upvc_sliding:
        item['tag'] = 'UPVC'
        item['category'] = 'UPVC Sliding Windows & Doors'
        item['title'] = f"UPVC Sliding Window & Door System {next_num('upvc_s')}"
    elif pid in upvc_casement:
        item['tag'] = 'UPVC'
        item['category'] = 'UPVC Casement Doors & Windows'
        item['title'] = f"UPVC Openable Casement Unit {next_num('upvc_c')}"
    elif pid in upvc_fixed_vent:
        item['tag'] = 'UPVC'
        item['category'] = 'UPVC Fixed Frames, Ventilators & Louvers'
        item['title'] = f"UPVC Fixed Frame / Ventilator & Louver {next_num('upvc_f')}"
    elif pid in wpc_frames:
        item['tag'] = 'WPC'
        item['category'] = 'WPC Door Frames (3x2 to 6x2.5)'
        item['title'] = f"Solid WPC Frame Section {next_num('wpc_f')}"
    elif pid in wpc_boards:
        item['tag'] = 'WPC'
        item['category'] = 'WPC Boards (6mm to 18mm)'
        item['title'] = f"WPC Board & Thickness Sample {next_num('wpc_b')}"
    elif pid in wpc_doors:
        item['tag'] = 'WPC'
        item['category'] = 'WPC Designer Doors (26mm–32mm)'
        item['title'] = f"WPC Designer Door Design {next_num('wpc_d')}"
    elif pid in panels_interiors:
        item['tag'] = 'Panels & Interiors'
        item['category'] = 'PVC / WPC Wall Panels & Interiors'
        item['title'] = f"PVC / WPC Panel & Interior Solution {next_num('panel')}"
    elif pid in hardware_oben:
        item['tag'] = 'Mesh & Hardware'
        item['category'] = 'UPVC Hardware & Fittings'
        item['title'] = f"OBEN Casement & Sliding Hardware Suite {next_num('hw')}"
    elif pid in mesh_grills:
        item['tag'] = 'Mesh & Hardware'
        item['category'] = 'Mosquito Mesh & Safety Grill Doors'
        item['title'] = f"Pleated / Hinged Mesh & Grill Door {next_num('mesh')}"
    else:
        item['tag'] = 'UPVC'
        item['category'] = 'UPVC Architectural Products'
        item['title'] = f"Architectural Showcase {pid:03d}"

with open('src/galleryData.json', 'w', encoding='utf-8') as f:
    json.dump(images, f, indent=2)

# Print summary
summary = {}
for it in images:
    summary[it['tag']] = summary.get(it['tag'], 0) + 1
print("Re-categorized all", len(images), "photos:", summary)
