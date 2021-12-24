FROM python:3.9

WORKDIR /app

RUN pip3 install --upgrade pip
COPY ./requirements.txt ./
RUN pip3 install -r requirements.txt

COPY . .
ENTRYPOINT ["sh", "entrypoint.sh"]