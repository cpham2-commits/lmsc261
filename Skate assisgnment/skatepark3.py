import json

data_json = (open("skaters.json"))
data_dict = json.load(data_json)
print(data_dict)

def check_age_experience(skaters):
	for skater in skaters: 
		name = skater["name"] 
		age = skater["age"]
		is_experienced = skater["is_experienced"]
		if (age >= 13 and is_experienced):
		    print(f"Hi {name}, welcome to the skate park!")

check_age_experience(data_dict)