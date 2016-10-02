import json
from watson_developer_cloud import ToneAnalyzerV3


tone_analyzer = ToneAnalyzerV3(
    username='0bc42246-466b-4ba6-a3e0-95d40d139356',
    password='W3PCYNGNwRpn',
    version='2016-05-19')

result = print(json.dumps(tone_analyzer.tone(text='Kill Yourself.'), indent=2))
