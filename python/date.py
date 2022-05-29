# datetime
import datetime

JST = datetime.timezone(t_delta, 'JST')
now = datetime.datetime.now(JST)

print(repr(now))
print(now)

d = now.strftime('%Y%m%d%H%M%S')
print(d)
