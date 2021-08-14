//
//  Branch.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import Foundation

struct Branch {
    var name: String
    var info: String
    var date: Int
    var priority: Int
    var subtasks: [Branch]
    var tasks: [Task]
}
