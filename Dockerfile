FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

RUN pip install -U pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . /usr/src/app/
RUN chmod 755 entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]