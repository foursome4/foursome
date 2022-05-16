import { Events } from "../../models/Events";
import { ICreateEventsDTO, IEventsRepository } from "../IEventsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class EventsRepository implements IEventsRepository {
  private events: Events[];

  private static INSTANCE: EventsRepository;

  private constructor() {
    this.events = [];
  }

  public static getInstance(): EventsRepository {
    if (!EventsRepository.INSTANCE) {
      EventsRepository.INSTANCE = new EventsRepository();
    }

    return EventsRepository.INSTANCE;
  }

  findByName(name: any): Events {
    const event = this.events.find((event) => event.name === name);
    try {
      const findName = collections.newsletter.findOne({ name })

      if (findName) {
        return
      }
    } catch {

    }
    return event;
  }

  async create({
    name,
    description,
    avatar,
    cover,
    theme,
    status,
    date,
    street,
    number,
    district,
    city,
    uf,
    complement,
    reference,
    idAccount,
    username,
    avatarUser,
    nickname,
    featured
  }: ICreateEventsDTO) {
    const event: Events = new Events();
    const _id = uuidv4()
    Object.assign(event, {
      _id, id: _id,
      name,
      description,
      avatar,
      cover,
      theme,
      status,
      date,
      street,
      number,
      district,
      city,
      uf,
      complement,
      reference,
      idAccount,
      username,
      avatarUser,
      nickname,
      featured,
      created_at: new Date()
    });

    this.events.push(event);
    console.log(event)
    await collections.events.insertOne(event).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.events.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { EventsRepository };
