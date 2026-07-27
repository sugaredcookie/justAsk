# Core entities

1. User:
	1. id
	2. email
	3. Display Name
	4. suspension  Status
	5. Solver Rating
	6. Poster rating
2. Problem
	1. id
	2. Explanation
	3. Service tag(Ref Service - FK)
	4. Poster Id(ref User -FK)
	5. Solver Id Id(ref User - FK, nullable)
	6. Status
	7. Created at
	8. Resolved At
3. Service
	1. id
	2. Tag
	3. Service Name(user defined, not nullable)
	4. Description(Nullable)
	5. Price
4. Admin:
	1. id
	2. email
	3. Name
	4. Role
5. Conflict:
	1. id
	2. poster Id
	3. solver id
	4. Problem Id(FK)
	5. Description
	6. Status
	7. Created at
	8. Resolved At
	