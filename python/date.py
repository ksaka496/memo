# datetime
import datetime

t_delta = datetime.timedelta(hours=9)
JST = datetime.timezone(t_delta, 'JST')
now = datetime.datetime.now(JST)

print(repr(now))
print(now)

#YYYYMMDDHHMMSS
d = now.strftime('%Y%m%d%H%M%S')
print(d)
