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
    theme,
    privacity,
    date,
    status,
    address,
  }: ICreateEventsDTO) {
    const event: Events = new Events();
    const _id = uuidv4()
    Object.assign(event, {
      _id, id: _id,
      name,
      description,
      avatar,
      theme,
      privacity,
      date,
      status,
      address,
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
}

export { EventsRepository };
