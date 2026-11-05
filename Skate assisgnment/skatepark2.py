import json
data_json = (open("ramps.json"))
data_dict = json.load(data_json)
print(data_dict)

both = data_dict.items()
for k, v in both:
    print(f"{k}s favourite ramp is {v}")
