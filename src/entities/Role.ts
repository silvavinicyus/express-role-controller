import {  Column, Entity, JoinTable, ManyToMany } from "typeorm";
import {BaseEntity} from './BaseEntity';
import Permission from "./Permission";

@Entity('roles')
class Role extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'permission_roles',
    joinColumns: [{name: "role_id"}],
    inverseJoinColumns: [{name: "permission_id"}]
  })
  permission: Permission[];
}

export default Role;