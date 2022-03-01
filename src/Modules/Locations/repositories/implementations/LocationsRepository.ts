import { Locations } from "../../models/Locations";
import { ICreateLocationsDTO, ILocationsRepository } from "../ILocationsRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from 'uuid'

class LocationsRepository implements ILocationsRepository {
  private locations: Locations[];

  private static INSTANCE: LocationsRepository;

  private constructor() {
    this.locations = [];
  }

  public static getInstance(): LocationsRepository {
    if (!LocationsRepository.INSTANCE) {
      LocationsRepository.INSTANCE = new LocationsRepository();
    }

    return LocationsRepository.INSTANCE;
  }

  findByName(name: any): Locations {
    const location = this.locations.find((location) => location.name === name);
    try {
      const findName = collections.newsletter.findOne({ name })

      if (findName) {
        return
      }
    } catch {

    }
    return location;
  }

  async create({
    name,
    description,
    avatar,
    cover,
    theme,
    privacity,
    date,
    status,
        street,
    number,
    district,
    city,
    uf,
    complement,
    reference,
  }: ICreateLocationsDTO) {
    const location: Locations = new Locations();
    const _id = uuidv4()
    Object.assign(location, {
      _id, id: _id,
      name,
      description,
      avatar,
      cover,
      theme,
      privacity,
      date,
      status,
          street,
    number,
    district,
    city,
    uf,
    complement,
    reference,
      created_at: new Date()
    });

    this.locations.push(location);
    console.log(location)
    await collections.locations.insertOne(location).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }

  list(){  }

  async update({ }){}

  async delete({id}) {
    await collections.locations.deleteOne(id).then((result) => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  }
}

export { LocationsRepository };
