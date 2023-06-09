import csv
import mysql.connector


# Ich weiß zwar nicht wie, aber das funktioniert. DO NOT TOUCH
def rearrange_time(s: str) -> str:
    print(s.split(" "))
    third = s.split(".")[2]
    third = third[:4] + ' ' + third[4:]
    s = s.split(".")[0] + "." + s.split(".")[1] + "." + third
    print(s)
    td = s.split(" ")[0].split(".")
    print(td)
    a = td[2] + "-" + td[1] + "-" + td[0] + " " + s.split(" ")[1]
    return a


def wind_direction(s: str) -> str:
    match s:
        case "E":
            return "east"
        case "NE":
            return "north-east"
        case "SE":
            return "south-east"
        case "W":
            return "west"
        case "NW":
            return "north-west"
        case "SW":
            return "south-west"
        case "N":
            return "north"
        case "S":
            return "south"
    return "north"


with open("C:/Users/luca-/OneDrive/Desktop/Values.csv", newline='') as csv_file:
    msql = mysql.connector.connect(
        host="localhost",
        user="NO_USER_FOR_YOU",
        password="NO_PASSWORD_FOR_YOU",
        database="prod"
    )
    cursor = msql.cursor()
    reader = csv.reader(csv_file, delimiter=' ', quotechar='|')
    for row in reader:
        file = open("C:/Users/luca-/OneDrive/Desktop/Save.txt", mode='a') #placeholder bis die Wetterstation und deren Datenbank ready ist.
        file.write('---------------------------------------\n')
        file.write('Time: ' + " ".join(row).split(";")[0] + "\n")
        file.write('Bricklet: ' + " ".join(row).split(";")[1] + "\n")
        file.write('UID: ' + " ".join(row).split(";")[2] + "\n")
        file.write('Var: ' + " ".join(row).split(";")[3] + "\n")
        file.write('RAW: ' + " ".join(row).split(";")[4] + "\n")
        file.write('Unit: ' + " ".join(row).split(";")[5] + "\n")
        file.write('----------------------------------------' + "\n")
        file.close()

        if " ".join(row).split(";")[1] == "Air Quality Bricklet":
            match " ".join(row).split(";")[3]:
                case "IAQ Index-Value":
                    sql = "INSERT INTO airquality (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]))
                    cursor.execute(sql, t)
                    msql.commit()
                case "Humidity":
                    sql = "INSERT INTO humidity (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 100)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Temperature":
                    sql = "INSERT INTO temperature (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 100)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Air Pressure":
                    sql = "INSERT INTO airpressure (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 100)
                    cursor.execute(sql, t)
                    msql.commit()
        else:
            match " ".join(row).split(";")[3]:
                case "Station Data:17-Temperature":
                    sql = "INSERT INTO weather_temperature (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 10)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Station Data:17-Humidity":
                    sql = "INSERT INTO weather_humidity (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]))
                    cursor.execute(sql, t)
                    msql.commit()
                case "Station Data:17-Wind Speed":
                    sql = "INSERT INTO weather_windspd (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 10)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Station Data:17-Gust Speed":
                    sql = "INSERT INTO weather_gustspd (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 10)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Station Data:17-Rain":
                    sql = "INSERT INTO weather_rain (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), float(" ".join(row).split(";")[4]) / 10)
                    cursor.execute(sql, t)
                    msql.commit()
                case "Station Data:17-Wind Direction":
                    sql = "INSERT INTO weather_wind (Time, Value) VALUES (%s, %s)"
                    t = (rearrange_time("".join(row).split(";")[0]), wind_direction(" ".join(row).split(";")[4]))
                    cursor.execute(sql, t)
                    msql.commit()
